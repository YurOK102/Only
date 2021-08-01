import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    height: '100vh',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <MainPage />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({});
export default connect(null, mapDispatchToProps)(App);
