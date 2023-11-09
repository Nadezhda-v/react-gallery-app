import style from './Photo.module.css';
import PropTypes from 'prop-types';
import Preview from './Preview';
import Author from './Author';
import Likes from './Likes';
import Date from './Date';
import { LAYOUTS } from '../Grid/Grid';

export const Photo = ({ data, index }) => {
  const {
    urls: {
      regular: preview,
    },
    user: author,
    created_at: date,
    id,
    likes,
  } = data;

  return (
    <div key={id}
      className={`${style.photo} ${style[LAYOUTS.default[index].name]}`}
    >
      <Preview preview={`${preview}&w=700&dpr=2`} />
      <div className={style.info}>
        <Author author={author} />
        <Likes likes={likes} />
        <Date date={date} />
      </div>
    </div>
  );
};

Photo.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};
