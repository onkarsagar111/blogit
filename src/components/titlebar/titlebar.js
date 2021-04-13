import React from 'react';
import {Icon} from 'semantic-ui-react';

import classes from './titlebar.module.css';

const Titlebar = (props) => {
    return(
        <div className={classes.Titlebar}>
            <Icon name="blogger" size="huge"/>
            <label className={classes.heading}>BLOG!T</label>
        </div>
    );
}

export default Titlebar;
