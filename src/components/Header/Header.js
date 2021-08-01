import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { toggleModeAction } from '../../store/actions/taskAction';
import { useStylesHeader } from './HeaderStyles';

function Header({ toggleModeAction, toggleMode, tasks }) {
  const classes = useStylesHeader();

  useEffect(() => {
    if (!tasks.length) toggleModeAction(false);
  }, [tasks, toggleModeAction, toggleMode]);

  return (
    <div className={classes.header}>
      <div className={classes.header__container}>
        <h3 className={classes.header__container_title}>Сегодня</h3>
        <button
          className={classes.header__container_btn}
          onClick={() => toggleModeAction(!toggleMode)}
          disabled={!tasks.length}
        >
          {!toggleMode ? 'Править' : 'Отменить'}
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.taskReducer.tasks,
  toggleMode: state.commonReducer.toggleMode,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModeAction: (data) => dispatch(toggleModeAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
