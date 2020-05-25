import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

import css from './SingleTransaction.module.css';


const singleTransaction = props => {

    let component = null;
    
    switch(props.type){
        case 'inc':
            component = 
            <div className={css.Income}>
                <div className={css.Left}>{props.description}</div>
                <div className={css.Right}>
                    <div className={css.Span}>&#8377; {props.amount}</div>     
                    <div className={css.Span}>--</div>  
                    <FaRegTrashAlt className={css.Delete} onClick = {props.delete}/>    
                </div>
            </div>;
            break;
        case 'exp':
             component = 
                <div className={css.Expense}>
                    <div className={css.Left}>{props.description}</div>
                    <div className={css.Right}>
                        <div className={css.Span}>&#8377; {props.amount}</div>     
                        <div className={css.Span}>{(props.percentage).toFixed(2)}%</div>
                        <FaRegTrashAlt className={css.Delete} onClick = {props.delete}/>
                    </div>                
                </div>;
            break;
        default:
            component = <div className = {css.Error}>At least provide a type</div>;
    }

    return(
        <div>
            {component}
        </div>
    );
    
};

export default singleTransaction;