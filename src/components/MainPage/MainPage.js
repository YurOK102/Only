import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Checkbox, FormControlLabel } from '@material-ui/core';

import ModalAddTask from '../Modal/ModalAddTask';
import ModalChangeTask from '../Modal/ModalChangeTask';
import {
  addTask,
  deleteTask,
  editTask,
  findeId,
} from '../../store/actions/taskAction';
import { useStylesMain } from './MainStyles';

function MainPage({
  tasks,
  addTask,
  deleteTask,
  editTask,
  toggleMode,
  findeId,
  editElem,
}) {
  const classes = useStylesMain();

  const [modalAddActive, setModalAddActive] = useState(false);
  const [modalChangeActive, setModalChangeActive] = useState(false);

  return (
    <div className={classes.main}>
      <>
        {!!tasks.length ? (
          <>
            {tasks.map((task) => {
              return (
                <div key={task.id} className={classes.main__tasks}>
                  {!!toggleMode ? (
                    <div className={classes.main__change_list}>
                      <button
                        className={classes.main__change_btn}
                        onClick={() => deleteTask(task.id)}
                      >
                        <img src={'img/minus.png'} alt="" />
                      </button>
                      <p
                        className={classes.main__change_task}
                        onClick={() => {
                          findeId(task.id);
                          setModalChangeActive(true);
                        }}
                      >
                        {task.title}
                      </p>
                    </div>
                  ) : (
                    <FormControlLabel
                      className={classes.main__formcontrol}
                      control={
                        <Checkbox
                          className={classes.main__checkbox}
                          checkedIcon={
                            <span className={classes.main__checkedIcon}>
                              <div
                                className={classes.main__checkedIcon_circle}
                              />
                            </span>
                          }
                          icon={<span className={classes.main__icon} />}
                          inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                      }
                      label={task.title}
                    />
                  )}
                </div>
              );
            })}
          </>
        ) : (
          <p className={classes.main__text}>Список задач пуст</p>
        )}
      </>

      <ModalAddTask
        modalAddActive={modalAddActive}
        setModalAddActive={setModalAddActive}
        addTask={addTask}
      />
      <ModalChangeTask
        modalChangeActive={modalChangeActive}
        setModalChangeActive={setModalChangeActive}
        tasks={tasks}
        addTask={addTask}
        editTask={editTask}
        editElem={editElem}
      />

      <button
        onClick={() => setModalAddActive(true)}
        className={`${classes.main__btn} ${toggleMode ? 'hide' : ''}`}
      >
        <img src={'img/plus.png'} alt="" />
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.taskReducer.tasks,
  editElem: state.taskReducer.editElem,
  toggleMode: state.commonReducer.toggleMode,
});

const mapDispatchToProps = (dispatch) => ({
  addTask: (data) => dispatch(addTask(data)),
  deleteTask: (data) => dispatch(deleteTask(data)),
  findeId: (id) => dispatch(findeId(id)),

  editTask: (id, value) => dispatch(editTask(id, value)),
  // editTask: (data) => dispatch(editTask(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
