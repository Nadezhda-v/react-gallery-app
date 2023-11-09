import style from './List.module.css';
import Photo from './Photo';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { photosRequestAsync } from '../../../store/photos/photosAction';
import { Outlet } from 'react-router-dom';
import Grid from './Grid';

export const List = () => {
  const photos = useSelector((state) => state.photos.data);
  const after = useSelector((state) => state.photos.after);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const [observeEndList, setObserveEndList] = useState(true);
  const autoLoadCount = useRef(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    dispatch(photosRequestAsync());
  }, []);

  useEffect(() => {
    if (autoLoadCount.current >= 2) {
      setShowButton(true);
      return;
    }

    if (!endList.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (autoLoadCount.current >= 2) {
        setObserveEndList(false);
      }

      if (entries[0].isIntersecting) {
        autoLoadCount.current += 1;
        dispatch(photosRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    if (endList.current && observeEndList) {
      observer.observe(endList.current);
    } else {
      observer.unobserve(endList.current);
    }

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      <div className={style.list}>
        <Grid items={photos ? photos.map((data, index) => (
          <Photo key={data.id} data={data} index={index}/>
        )) : null} />

        {autoLoadCount.current < 2 && observeEndList ? (
          <div className={style.lastItem} ref={endList} />
        ) : <></>}
      </div>

      {showButton && after ? (
        <div className={style.buttonWrapper}>
          <button
            className={style.button}
            onClick={() => {
              autoLoadCount.current = 0;
              dispatch(photosRequestAsync());
            }}
          >
            Загрузить ещё
          </button>
        </div>
      ) : <></>}
      <Outlet />
    </>
  );
};
