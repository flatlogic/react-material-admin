import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  starterBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '100px auto',
    padding: '24px',
    width: '720px',
    borderRadius: '8px',
    h3: {
      textAlign: 'center',
    },
    p: {
      textAlign: 'center',
    },

    '@media (max-width: 767.98px)': {
      width: '520px',
      img: {
        width: '250px',
        height: '250px',
      },
    },
    '@media (max-width: 575.98px)': {
      width: '340px',
      img: {
        width: '150px',
        height: '150px',
      },
    },
  },

  img: {
    margin: '20px auto',
    width: '350px',
    height: '350px',
  },

  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  a: {
    width: '100%',
  },
  leftButton: {
    width: '100%',
  },
  rightButton: {
    width: '100%',
    marginLeft: '16px',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem',
  },
}));
