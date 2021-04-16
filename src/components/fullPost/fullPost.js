import React from 'react';
import { Icon } from 'semantic-ui-react';
import Main from '../../helper/main/main';

import classes from './fullPost.module.css';

const FullPost = (props) => {
    return (
        <div className={classes.FullPost}>
            <p className={classes.heading}>{props.title}</p>
            <span>
                <Icon name="time" />
                <label>{props.readtime}</label>
            </span>
            <h4>{props.content}</h4>
        </div>
    );
}

export default FullPost;
