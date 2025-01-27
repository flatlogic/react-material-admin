import React from 'react';
import PropTypes from 'prop-types';

class Loader extends React.Component {
  static propTypes = {
    size: PropTypes.number.isRequired,
  };

  static defaultProps = {
    size: 21,
  };

  render() {
    return (
      <div>
        <i
          className='la la-spinner la-spin'
          style={{ fontSize: this.props.size }}
        />
      </div>
    );
  }
}

export default Loader;
