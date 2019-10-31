import React from 'react';
import PropTypes from 'prop-types';

const ColorDisplay = ({ backgroundColor, backgroundImage }) => (
  <div style={{
    backgroundImage,
    backgroundSize: 'cover',
    backgroundColor,
    width: '100px',
    height: '100px'
  }}></div>
);

ColorDisplay.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string
};

export default ColorDisplay;
