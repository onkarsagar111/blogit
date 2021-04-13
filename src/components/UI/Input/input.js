import React from 'react';
import classes from './input.module.css';

const Input = (props) => {

    var inputElement = null;
    var attachedClasses = [classes.Input];

    if (props.validity) {
        attachedClasses.push(classes.Valid);
    } else {
        attachedClasses.push(classes.Invalid);
    }

    switch (props.type) {
        case 'text': inputElement = <input className={attachedClasses.join(' ') } placeholder={props.placeholder} type='text' />; break;
        case 'password': inputElement = <input className={attachedClasses.join(' ') } placeholder={props.placeholder} type='password' />; break;
        case 'select': inputElement = <select className={attachedClasses.join(' ') } placeholder={props.placeholder} >
            {props.options.map(country => {
                return <option key={country}>{country}</option>
            })}
        </select>
            break;
        case 'textarea': inputElement = <textarea className={attachedClasses.join(' ') } placeholder={props.placeholder} rows={props.rows} cols={props.cols} />; break;
        default: inputElement = <input className={attachedClasses.join(' ') } placeholder={props.placeholder} type='text' />
    }

    return (
        <div >
            {inputElement}
        </div>
    );
}

export default Input;
