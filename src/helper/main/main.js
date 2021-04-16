import React, { useState, useEffect } from 'react';

import classes from './main.module.css'

const Main = (props) => {

    const [attachedClasses, setAttachedClasses] = useState(props.miniMode === true ? classes.MainMin : classes.MainMax);

    useEffect(() => {
        props.miniMode === true ? setAttachedClasses(classes.MainMin) : setAttachedClasses(classes.MainMax);
    }, [props.miniMode, props.children])

    return (
        <div className={attachedClasses}>
            {props.children}
        </div>
    )
}

export default Main;