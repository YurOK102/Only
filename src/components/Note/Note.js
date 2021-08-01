import React from 'react';

import { useStylesNote } from './NoteStyles';

const Note = () => {
  const classes = useStylesNote();

  return (
    <div className={classes.note}>
      <button className={classes.note__btn}>
        <img src={'img/minus.png'} alt="" />
      </button>

      <p className={classes.note__text}>text</p>
    </div>
  );
};

export default Note;
