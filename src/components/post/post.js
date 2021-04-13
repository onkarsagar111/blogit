import React from 'react';
import { Icon } from 'semantic-ui-react';

import classes from './post.module.css';

const Post = (props) => {
    return (
        <div className={classes.Body} onClick={props.clicked}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <span>
                <Icon name="time" />
                <label>{props.readtime}</label>
            </span>
        </div>
    );
}

export default Post;

