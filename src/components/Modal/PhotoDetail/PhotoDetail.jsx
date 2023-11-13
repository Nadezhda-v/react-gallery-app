import style from './PhotoDetail.module.css';
import PropTypes from 'prop-types';
import { formatDate } from '../../../utils/formatDate';
import { LikeIcon } from './LikeIcon';
import { useDispatch, useSelector } from 'react-redux';
import { likeRequestAsync } from '../../../store/like/likeAction';
import { photoSlice } from '../../../store/photo/photoSlice';
import { useEffect } from 'react';

export const PhotoDetail = ({ data }) => {
  if (!data) return;

  const {
    urls: {
      regular: preview,
    },
    user: {
      name: author,
      profile_image: {
        medium: avatar,
      },
      links: {
        self: href,
      }
    },
    created_at: date,
    id,
  } = data;

  const dispatch = useDispatch();
  const likes = useSelector((state) => state.photo.likes);
  const isLiked = useSelector((state) => state.photo.isLiked);

  const handleLike = () => {
    dispatch(photoSlice.actions.updateLike());
  };

  useEffect(() => {
    const method = !isLiked ? 'DELETE' : 'POST';
    dispatch(likeRequestAsync({ id, method }));
    dispatch(photoSlice.actions.setLike({ id, likes, isLiked }));
  }, [likes, isLiked]);

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <img src={preview} className={style.preview} alt='Фото' />

        <div className={style.photoInfo}>
          <div className={style.author}>
            <img src={avatar} className={style.avatar} alt='Аватар' />

            <div className={style.text}>
              <a
                className={style.linkAuthor}
                href={href}
              >
                {author}
              </a>

              <time className={style.date} dateTime={date}>
                {date && (formatDate(date))}
              </time>
            </div>
          </div>

          <div className={style.raiting}>
            <button
              onClick={handleLike}
              className={style.likes}
              aria-label='Нравится'
            >
              <LikeIcon
                fill={isLiked ? '#a52222' : '#adadad'}
                className={style.svg}
              />
            </button>

            {likes > 0 &&
              <p className={style.count}>
                {likes}
              </p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

PhotoDetail.propTypes = {
  data: PropTypes.object,
};

