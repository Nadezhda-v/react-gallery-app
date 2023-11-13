import PropTypes from 'prop-types';

export const LikeIcon = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
      C2 5.42 4.42 3 7.5 3C9.23 3 10.9 3.81 12 5.26
      C13.1 3.81 14.77 3 16.5 3C19.58 3 22 5.42 22 8.5
      C22 11.58 18.6 14.65 12 21.35z" fill={fill} />
  </svg>
);

LikeIcon.propTypes = {
  fill: PropTypes.string,
};

