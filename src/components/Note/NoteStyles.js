import { makeStyles } from '@material-ui/core/styles';

export const useStylesNote = makeStyles((theme) => ({
  note: {
    note: '100%',
    display: 'flex',
  },
  note__btn: {
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    background: theme.palette.primary.light_red,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '15px',
  },
  note__text: {},
}));
