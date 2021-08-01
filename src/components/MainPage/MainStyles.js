import { makeStyles } from '@material-ui/core/styles';

export const useStylesMain = makeStyles((theme) => ({
  main: {
    padding: '0 40px 40px',

    [theme.breakpoints.up('xl')]: {
      width: '1200px',
      margin: '0 auto',
    },
  },
  main__text: {
    ...theme.typography.p,
  },
  main__tasks: {
    marginBottom: '30px',
    minHeight: '23px',
  },
  main__btn: {
    width: '60px',
    height: '60px',
    borderRadius: '50px',
    position: 'absolute',
    bottom: '40px',
    right: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.primary.white,
    boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
    zIndex: 2,

    '&.hide': {
      display: 'none',
    },
  },
  main__formcontrol: {
    margin: 0,

    '& .MuiTypography-body1': {
      ...theme.typography.p,
    },
  },
  main__checkbox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    marginRight: '14px',
  },
  main__checkedIcon: {
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    border: '2px solid #D9D9D9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& div': {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: theme.palette.primary.blue,
    },
  },
  main__icon: {
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    border: '2px solid #D9D9D9',
  },

  main__change_list: {
    display: 'flex',
    alignItems: 'center',
  },
  main__change_btn: {
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.primary.light_red,
    marginRight: '14px',
    border: '2px solid #E85C5C',
  },
  main__change_task: {
    ...theme.typography.p,
    cursor: 'pointer',
  },
}));
