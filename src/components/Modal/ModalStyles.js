import { makeStyles } from '@material-ui/core/styles';

export const useStylesModal = makeStyles((theme) => ({
  modal: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: '100%',
    right: 0,
    zIndex: 100,
    transition: 'all 600ms cubic-bezier(0.86, 0, 0.07, 1)',
    pointerEvents: 'none',
    opacity: 0,

    '&.active': {
      top: 0,
      opacity: 1,
      pointerEvents: 'all',
    },

    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  modal__content: {
    padding: '40px',
    boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.1)',
    borderRadius: '40px 40px 0 0',
    background: theme.palette.primary.white,
    width: '100vw',
    height: '100vh',
    marginTop: '132px',

    [theme.breakpoints.up('md')]: {
      width: '600px',
      height: '300px',
      margin: '0 auto',
      borderRadius: '40px',
    },
  },
  modal__content_textfield: {
    width: '100%',
    height: '160px',
  },
  modal__wrapper_btn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '30px',
  },
  modal__content_btn: {
    ...theme.typography.modal_btn,
    width: '137px',
    height: '40px',
    borderRadius: '10px',
  },
  modal__content_btn_close: {
    background: theme.palette.primary.light_grey,
    color: theme.palette.primary.modal_black,
  },
  modal__content_btn_add: {
    background: theme.palette.primary.blue,
    color: theme.palette.primary.white,
  },
}));
