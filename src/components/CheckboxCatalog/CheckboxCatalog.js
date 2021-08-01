import React from 'react';
import { Checkbox } from '@material-ui/core';
import SimpleBarReact from 'simplebar-react';

import { useStylesCheckboxCatalog } from './CheckboxCatalogStyles';

function CheckboxCatalog({ data }) {
  const classes = useStylesCheckboxCatalog();

  return (
    <div className={classes.options_list}>
      <SimpleBarReact style={{ maxHeight: 152 }}>
        {data.map((i, index) => (
          <div key={index} className={classes.options_list__wrapper}>
            <img src={i.img} />
            <div className={classes.options_list__text}>
              <p className={classes.options_list__title}>{i.title}</p>
              <p className={classes.options_list__price}>от {i.price} ₽</p>
            </div>
            <div>
              <Checkbox
                checkedIcon={
                  <span className={classes.options_list__checkedIcon} />
                }
                icon={<span className={classes.options_list__icon} />}
                // checked={checked}
                // onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </div>
          </div>
        ))}
      </SimpleBarReact>
    </div>
  );
}

export default CheckboxCatalog;
