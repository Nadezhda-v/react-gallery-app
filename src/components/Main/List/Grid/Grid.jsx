import style from './Grid.module.css';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';

export const Grid = ({ items }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={`'masonry-grid' ${style.masonryGrid}`}
      columnClassName={`'masonry-grid_column' ${style.masonryGridColumn}`}
    >
      {items.map((item, index) => (
        <div key={index} className='masonry-item'>
          {item}
        </div>
      ))}
    </Masonry>
  );
};

Grid.propTypes = {
  items: PropTypes.array,
};
