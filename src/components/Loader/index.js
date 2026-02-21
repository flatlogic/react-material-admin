import React from 'react';
import PropTypes from 'prop-types';

function Loader({ size }) {
  return (
    <div>
      <i className='la la-spinner la-spin' style={{ fontSize: size }} />
    </div>
  );
}

Loader.propTypes = {
  size: PropTypes.number.isRequired,
};

Loader.defaultProps = {
  size: 21,
};

export default Loader;
