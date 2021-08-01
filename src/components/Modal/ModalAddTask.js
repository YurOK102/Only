import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import { useStylesModal } from './ModalStyles';

const ModalAddTask = ({ modalAddActive, setModalAddActive, addTask }) => {
  const classes = useStylesModal();

  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const addTodo = () => {
    addTask(value);
    setValue('');
    setModalAddActive(false);
  };

  return (
    <div className={modalAddActive ? `${classes.modal} active` : classes.modal}>
      <div className={classes.modal__content}>
        <TextField
          className={classes.modal__content_textfield}
          label="Введите текст задачи"
          multiline
          rows={5}
          variant="outlined"
          value={value}
          onChange={onChange}
        />

        <div className={classes.modal__wrapper_btn}>
          <button
            onClick={() => setModalAddActive(false)}
            className={`${classes.modal__content_btn} ${classes.modal__content_btn_close}`}
          >
            Закрыть
          </button>

          <button
            onClick={addTodo}
            className={`${classes.modal__content_btn} ${classes.modal__content_btn_add}`}
            type="submit"
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddTask;
