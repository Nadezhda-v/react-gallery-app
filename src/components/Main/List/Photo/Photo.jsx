import style from './Photo.module.css';
import PropTypes from 'prop-types';
import Preview from './Preview';
import Author from './Author';
import Likes from './Likes';
import Date from './Date';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

  const [imageLoaded, setImageLoaded] = useState(false);

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
            <Likes likes={likes} liked={liked} />
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
