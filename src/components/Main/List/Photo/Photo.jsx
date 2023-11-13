import style from './Photo.module.css';
import PropTypes from 'prop-types';
import Preview from './Preview';
import Author from './Author';
import Likes from './Likes';
import Date from './Date';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { photoSlice } from '../../../../store/photo/photoSlice';

export const Photo = ({ data }) => {
  const {
    urls: {
      regular: preview,
    },
    user: author,
    created_at: date,
    id,
    likes,
    liked_by_user: liked,
  } = data;

  const dispatch = useDispatch();
  const [imageLoaded, setImageLoaded] = useState(false);
  const photos = useSelector((state) => state.photo.photos);
  let likesCount = 0;
  let isLiked = false;

  useEffect(() => {
    const setLike = () => {
      dispatch(photoSlice.actions.setLike({ id, likes, isLiked: liked }));
    };

    setLike();
  }, [id]);

  const photo =
    photos.find(photo => photo.id === id);

  if (photo) {
    isLiked = photo.isLiked;
    likesCount = photo.likes;
  }

  useEffect(() => {
    const img = new Image();
    img.src = preview;
    img.addEventListener('load', () => {
      setImageLoaded(true);
    });

    return () => {
      img.removeEventListener('load', () => {
        setImageLoaded(true);
      });
    };
  }, [preview]);

  return (
    <div key={id} className={style.photo}>
      <Link
        className={style.linkPhoto}
        to={`/gallery/photo/${id}`}
      >
        <Preview preview={`${preview}&w=700&dpr=2`} />
      </Link>

      {imageLoaded && (
        <div className={style.wrapper}>
          <div className={style.info}>
            <Author author={author} />
            <Date date={date} />
          </div>

          <div className={style.like}>
            <Likes likes={likesCount} liked={isLiked} />
          </div>
        </div>
      )}
    </div>
  );
};

Photo.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};
