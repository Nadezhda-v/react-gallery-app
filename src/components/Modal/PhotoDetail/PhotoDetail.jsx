import style from './PhotoDetail.module.css';
import PropTypes from 'prop-types';
import { formatDate } from '../../../utils/formatDate';
import { ReactComponent as LikeIcon } from '../img/like.svg';

export const PhotoDetail = ({ data }) => {
  const {
    urls: {
      regular: preview,
    },
    user: {
      name: author,
      profile_image: {
        small: avatar,
      },
    },
    created_at: date,
    // id,
    likes,
    links: {
      self: href,
    }
  } = data;

  return (
    <div className={style.container}>
      <img src={preview} className={style.img} alt='Фото'/>
      <img src={avatar} className={style.img} alt='Аватар'/>

      <a
        className={style.linkAuthor}
        href={href}
      >
        {author}
      </a>

      <time className={style.date} dateTime={date}>
        {date && (formatDate(date))}
      </time>

      <div className={style.raiting}>
        <button className={style.likes} aria-label='Нравится'>
          <LikeIcon />
        </button>

        {likes > 0 &&
          <p className={style.count} data-text={likes}>
            {likes}
          </p>
        }
      </div>
    </div>
  );
};

PhotoDetail.propTypes = {
  data: PropTypes.object,
};

