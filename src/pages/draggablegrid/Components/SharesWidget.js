import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Dot from '../../../components/Dot/Dot';

import a1 from '../../../images/grid/a1.jpg';
import a2 from '../../../images/grid/a2.jpg';
import a3 from '../../../images/grid/a3.jpg';
import a4 from '../../../images/grid/a4.jpg';
function SharesWidget() {
  const theme = useTheme();

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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
        marginBottom: -20,
      }}
    >
      {shares.map(item => (
        <div
          key={item.name}
          style={{
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
            borderTop: '2px solid rgba(185, 185, 185, 0.3)',
            backgroundColor: 'transparent',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <span>
              <img
                src={item.img}
                alt="..."
                style={{
                  float: 'left',
                  height: 50,
                  width: 50,
                  marginRight: 20,
                  borderRadius: '50%',
                }}
              />
            </span>
            <div>
              <div style={{ fontSize: '1.15rem' }}>{item.name}</div>
              <small style={{ color: theme.palette.text.secondary }}>{item.comment}</small>
            </div>
          </div>
          <Box sx={{ '@media (max-width: 320px)': { display: 'none' } }}>
            <Dot size='large' color={item.type}/>
          </Box>
        </div>                
      ))}
    </div>
  );
}

export default SharesWidget;
