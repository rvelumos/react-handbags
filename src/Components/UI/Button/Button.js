import React from 'react';
import classes from './Button.css';

function onClickHandler(value) {
    console.log(value);
}

const button = (props) => {
    return(
        <button onClick={() => onClickHandler(props.value)} className={classes.Button} disabled={props.disabled} value={props.value}>{props.value}</button>
    )
}

export default button;