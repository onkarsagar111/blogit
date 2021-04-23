import React from 'react';
import { Icon } from 'semantic-ui-react';
import Interweave from 'interweave';


import classes from './fullPost.module.css';

const FullPost = (props) => {
    console.log(props);
    return (
        <div className={classes.FullPost}>
            <p className={classes.heading}>{props.location.state.title}</p>
            <span>
                <Icon name="time" />
                <label>{props.location.state.readtime}</label>
            </span>
            <Interweave content={props.location.state.content} />
        </div>
    );
}

export default FullPost;
