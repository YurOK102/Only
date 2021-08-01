import { makeStyles } from '@material-ui/core/styles';

export const useStylesHeader = makeStyles((theme) => ({
  header: {
    padding: '60px 40px 0',
    marginBottom: '49px',

    [theme.breakpoints.up('xl')]: {
      width: '1200px',
      margin: '0 auto',
      marginBottom: '50px',
    },
  },
  header__container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header__container_title: {
    ...theme.typography.h3,
  },
  header__container_btn: {
    ...theme.typography.header_btn,
    width: '86px',
    padding: '4px 0',
    background: theme.palette.light_gray,
    borderRadius: '4px',
  },
}));
