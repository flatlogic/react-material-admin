import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';

function Loader({ size }) {
  return (
    <div>
      <CircularProgress size={size} />
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
