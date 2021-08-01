import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';

import { useStylesModal } from './ModalStyles';

const ModalChangeTask = ({
  modalChangeActive,
  setModalChangeActive,
  editTask,
  editElem,
}) => {
  const classes = useStylesModal();

  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const editTodo = () => {
    editTask(editElem?.id, value);
    // editTask({
    //   id: editElem?.id,
    //   title: value
    // });

    setValue('');
    setModalChangeActive(false);
  };

  useEffect(() => {
    if (editElem) {
      setValue(editElem.title);
    } else {
      setValue('');
    }
  }, [editElem]);

  return (
    <div
      className={`${classes.modal} ${modalChangeActive ? 'active' : ''}`}
      // className={`${classes.main__btn} ${edit ? 'hide' : ''}`}
    >
      <div className={classes.modal__content}>
        <TextField
          className={classes.modal__content_textfield}
          multiline
          rows={5}
          variant="outlined"
          value={value}
          onChange={onChange}
        />

        <div className={classes.modal__wrapper_btn}>
          <button
            onClick={() => setModalChangeActive(false)}
            className={`${classes.modal__content_btn} ${classes.modal__content_btn_close}`}
          >
            Закрыть
          </button>

          <button
            onClick={editTodo}
            className={`${classes.modal__content_btn} ${classes.modal__content_btn_add}`}
            type="submit"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalChangeTask;
