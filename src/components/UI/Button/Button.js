import React from 'react';

import css from './Button.module.css';

const button = props => {

    let btn = null;

    switch(props.type){
        case 'right':
            btn = <button 
            className={css.Right}
            onClick = {props.clicked}
            >{props.children}</button>
            break;
        case 'wrong':
            btn = <button 
            className={css.Wrong}
            onClick = {props.clicked}
            >{props.children}</button>
            break;
        default:
            btn = <p>At least provide the type of button.</p>

    }

    return btn;

};

export default button;