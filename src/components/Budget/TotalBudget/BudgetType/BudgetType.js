import React from 'react';
import css from './BudgetType.module.css';

const budgetType = props => {

    let component = null;
    
    switch(props.type){
        case 'income':
            component = 
            <div className={css.Income}>
                <div className={css.Left}>Income</div>
                <div className={css.Right}>
                    <span>&#8377; {props.value}</span>     
                    <span>--</span>     
                </div>
            </div>;
            break;
        case 'expense':
             component = 
                <div className={css.Expense}>
                    <div className={css.Left}>Expense</div>
                    <div className={css.Right}>
                        <span>&#8377; {props.value}</span>     
                        <span>{(props.perc).toFixed(2)}%</span>     
                    </div>                
                </div>;
            break;
        default:
            component = <div className = {css.Error}>Error</div>;
    }

    return(
        <div>
            {component}
        </div>
    );
    
};

export default budgetType;