import { useEffect, useState } from 'react';
import style from './Grid.module.css';
import PropTypes from 'prop-types';
import { debounceRaf } from '../../../../utils/debounce';

export const LAYOUTS = {
  default: [
    { name: 'item-one', x: 0, y: 0 },
    { name: 'item-two', x: 0, y: 220 },
    { name: 'item-three', x: 0, y: 440 },
    { name: 'item-four', x: 320, y: 220 },
    { name: 'item-five', x: 640, y: 0 },
    { name: 'item-six', x: 960, y: 0 },
    { name: 'item-seven', x: 640, y: 220 },
    { name: 'item-eight', x: 640, y: 440 },
    { name: 'item-nine', x: 960, y: 440 },
  ],
  tablet: [
    { name: 'item-one', x: 0, y: 0 },
    { name: 'item-two', x: 0, y: 165 },
    { name: 'item-three', x: 0, y: 330 },
    { name: 'item-four', x: 215, y: 165 },
    { name: 'item-five', x: 430, y: 0 },
    { name: 'item-six', x: 650, y: 0 },
    { name: 'item-seven', x: 430, y: 165 },
    { name: 'item-eight', x: 430, y: 330 },
    { name: 'item-nine', x: 650, y: 330 },
  ],
  mobile: [
    { name: 'item-one', x: 0, y: 0 },
    { name: 'item-two', x: 0, y: 140 },
    { name: 'item-three', x: 0, y: 280 },
    { name: 'item-four', x: 350, y: 140 },
    { name: 'item-five', x: 350, y: 0 },
    { name: 'item-six', x: 350, y: 420 },
    { name: 'item-seven', x: 0, y: 420 },
    { name: 'item-eight', x: 320, y: 220 },
    { name: 'item-nine', x: 175, y: 280 },
  ],
};

export const Grid = ({ items }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    window.addEventListener('resize', debounceResize);

    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  const getLayoutForWindowWidth = () => {
    if (windowWidth > 1380) return LAYOUTS.default;
    if (windowWidth <= 930) return LAYOUTS.mobile;
    if (windowWidth <= 1380) return LAYOUTS.tablet;
  };

  const currentLayout = getLayoutForWindowWidth();

  return (
    <div className={style.gridContainer}>
      <div className={style.gridWrapper}>
        {items.map((item, index) => {
          const { x, y } = currentLayout[index];

          return (
            <div
              key={index}
              style={{
                position: 'absolute',
                transform: `translate(${x}px, ${y}px)`,
              }}
              className={`${style.gridItem} ${currentLayout[index].name}`}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Grid.propTypes = {
  items: PropTypes.array,
};
