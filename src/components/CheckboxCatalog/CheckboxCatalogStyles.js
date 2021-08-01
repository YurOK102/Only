import { makeStyles } from '@material-ui/core/styles';

export const useStylesCheckboxCatalog = makeStyles((theme) => ({
  options_list: {
    height: '152px',
    background: '#FAFAFA',
    // overflowY: 'scroll',
  },
  options_list__wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
    borderBottom: '1px solid #EBEBEB',
  },
  options_list__text: {
    // width: '210px',
    padding: '6px 0',
    '& p': {
      margin: '3px 0',
    },
  },
  options_list__title: {
    ...theme.typography.p,
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '18px',
    color: '#131313',
  },
  options_list__price: {
    ...theme.typography.h2,
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '18px',
    color: '#EE3D48',
  },
  options_list__checkedIcon: {
    width: '15px',
    height: '15px',
    borderRadius: '2px',
    backgroundImage: 'url(assets/checkbox_checked.svg)',
  },
  options_list__icon: {
    width: '15px',
    height: '15px',
    borderRadius: '2px',
    border: '1px solid #EE3D48',
    backgroundColor: '#FFFFFF',
  },
}));
