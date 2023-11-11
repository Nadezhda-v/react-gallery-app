import style from './Likes.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as LikeIcon } from './img/like.svg';

export const Likes = ({ likes }) => (
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
);

Likes.propTypes = {
  likes: PropTypes.number,
};
