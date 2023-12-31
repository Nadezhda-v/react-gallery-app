import style from './List.module.css';
import Photo from './Photo';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { galleryRequestAsync } from '../../../store/gallery/galleryAction';
import { Outlet } from 'react-router-dom';
import Grid from './Grid';

export const List = () => {
  const photos = useSelector((state) => state.gallery.data);
  const endList = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(galleryRequestAsync());
      }
    }, {
      rootMargin: '50px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      <div className={style.list}>
        <Grid items={photos ? photos.map((data) => (
          <Photo key={data.id} data={data} />
        )) : null} />

        <div className={style.lastItem} ref={endList} />
      </div>

      <Outlet />
    </>
  );
};
