import style from './Author.module.css';
import PropTypes from 'prop-types';

export const Author = ({ author }) => {
  const {
    name,
    links: {
      self: href,
    }
  } = author;

  return (
    <a
      className={style.linkAuthor}
      href={href}
    >
      {name}
    </a>
  );
};

Author.propTypes = {
  author: PropTypes.object,
  name: PropTypes.string,
  href: PropTypes.string,
};
