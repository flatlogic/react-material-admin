import React from "react";
import ReactPaginate from 'react-paginate';
import useStyles from './styles'

const Pagination = ({...props}) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <ReactPaginate
        pageClassName={classes.element}
        containerClassName={classes.container}
        pageLinkClassName={classes.link}
        {...props}
      />
    </div>
  );
};

export default Pagination;
