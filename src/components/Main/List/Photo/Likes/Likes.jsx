import style from './Likes.module.css';
import PropTypes from 'prop-types';

export const Likes = ({ likes }) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг' />

    <p
      className={style.likes}
    >
      {likes}
    </p>
  </div>
);

Likes.propTypes = {
  likes: PropTypes.number,
};
