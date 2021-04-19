import React from 'react';
import { Icon } from 'semantic-ui-react';

import classes from './errorModal.module.css';

const ErrorModal = (props) => {

    let attachedClass = [classes.ErrorModal];
    let icon = null;

    if(props.success) {
        attachedClass.push(classes.Success);
        icon = <Icon name='check' color='green' />
    } else {
        attachedClass.push(classes.Error);
        icon = <Icon name='close' color='red' />
    }
    return(
        <div className={attachedClass.join(' ')}>
            {icon}
            {props.message}
        </div>
    );
}

export default ErrorModal;