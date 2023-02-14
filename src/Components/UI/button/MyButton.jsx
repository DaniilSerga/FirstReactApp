import React from "react";
import classes from './MyButton.module.css';

const MyButton = ({text, ...props}) => {
    return(
        <button {...props} className={classes.myBtn}>
            {text}
        </button>
    );
}

export default MyButton;