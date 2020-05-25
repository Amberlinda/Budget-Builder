import React from 'react';
import css from './Input.module.css';

const input = props => {

    let component = null;
    // console.log(props.valid);
    let cssClasses = [];
    if(!props.valid){ cssClasses.push(css.Red);}

    switch(props.type){
        case 'select':
            cssClasses.push(css.Select);
            component = 
            <select 
            className={cssClasses.join(' ')}
            onChange={props.changed}>
                <option>+</option>
                <option>-</option>
            </select>
            break;
        case 'text':
            cssClasses.push(css.Text);
           component = <input 
           type={props.type} 
           className = {cssClasses.join(' ')}
           placeholder={props.placeholder}
           onChange={props.changed}
        />
            break;
        default:
            component = 
            <p>At least provide with a input type.</p>
    }

    return component;
};

export default input;