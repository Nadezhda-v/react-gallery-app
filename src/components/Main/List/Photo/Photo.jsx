import style from './Photo.module.css';
import PropTypes from 'prop-types';
import Preview from './Preview';
import Author from './Author';
import Likes from './Likes';
import Date from './Date';

export const Photo = ({ data }) => {
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
      className={style.photo}
    >
      <Preview preview={`${preview}&w=700&dpr=2`} />
      <div className={style.wrapper}>
        <div className={style.info}>
          <Author author={author} />
          <Date date={date} />
        </div>

        <div className={style.like}>
          <Likes likes={likes} />
        </div>
      </div>
    </div>
  );
};

Photo.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};
