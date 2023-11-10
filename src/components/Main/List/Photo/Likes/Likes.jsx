import style from './Likes.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as LikeIcon } from './img/like.svg';

export const Likes = ({ likes }) => (
  <div className={style.raiting}>
    <button className={style.likes} aria-label='Повысить рейтинг'>
      <LikeIcon />
    </button>

    {likes &&
      <p className={style.count}>
        {likes}
      </p>
    }
  </div>
);

Likes.propTypes = {
  likes: PropTypes.number,
};
