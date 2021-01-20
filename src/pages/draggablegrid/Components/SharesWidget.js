import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Dot from '../../../components/Dot/Dot';

import a1 from '../../../images/grid/a1.jpg';
import a2 from '../../../images/grid/a2.jpg';
import a3 from '../../../images/grid/a3.jpg';
import a4 from '../../../images/grid/a4.jpg';
import a5 from '../../../images/grid/a5.jpg';
import a6 from '../../../images/grid/a6.jpg';


const styles = (theme) => ({
  buttonsGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: -20,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    paddingLeft: 0,
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none',
    borderTop: `2px solid rgba(185, 185, 185, 0.3)`,
    backgroundColor: 'transparent',
  },
  img: {
    float: 'left',
    height: 50,
    width: 50,
    marginRight: 20,
    borderRadius: '50%',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: '1.15rem',
  },
  userLabel: {
    color: theme.palette.text.secondary,
  },
})

const SharesWidget = ({ classes }) => {

  const shares = [
    {
      img: a1,
      name: 'Maikel Basso',
      comment: 'about 2 mins ago',
      type: '#FFC35F'
    },
    {
      img: a2,
      name: 'Ianus Arendse',
      comment: 'about 42 mins ago',
      type: '#536DFE'
    },
    {
      img: a3,
      name: 'Valdemar Landau',
      comment: 'one hour ago',
      type: '#3CD4A0'
    },
    {
      img: a4,
      name: 'Rick Teagan',
      comment: '3 hours ago',
      type: '#FF5C93'
    }
  ]
  // function updatedData = (data) => {

  // }
  return (
    <div className={classes.buttonsGroup}>
      {shares.map(item => (
        <div className={classes.button} key={item.name}>
          <div className={classes.userInfo}>
            <span>
              <img className={classes.img} src={item.img} alt="..." />
            </span>
            <div>
              <div className={classes.userName}>{item.name}</div>
              <small className={classes.userLabel}>{item.comment}</small>
            </div>
          </div>
          <Dot size='medium' color={item.type}/>
        </div>                
      ))}
    </div>
  )
}

export default withStyles(styles)(SharesWidget)


// <div className="list-group list-group-lg">
// {this.state.gridData.shares.map(item => (
//   <button key={item.name} className={`list-group-item text-left ${item.extraClass}`}>
//     <span className="thumb-sm mr">
//       <img className="rounded-circle" src={item.img} alt="..." />
//     </span>
//     <div>
//       <h6 className="m-0">{item.name}</h6>
//       <small className="text-muted">{item.comment}</small>
//     </div>
//     <i className={`fa fa-circle ml-auto text-${item.type}`} />
//   </button>                
// ))}

// </div>