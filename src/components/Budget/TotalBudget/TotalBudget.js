import React from 'react';
import BudgetType from './BudgetType/BudgetType';
import css from './TotalBudget.module.css';

const totalBudget = props => {

    const amountCommaHandler = (amount) => {
        let [Amount] = amount.toString().split('.');
        let updatedAmount = Amount.toString().split('');
        if (updatedAmount){
            if(updatedAmount.length > 3){
                for(let i=updatedAmount.length ; i> 0; i -= 3){
                    if(i < updatedAmount.length){
                        updatedAmount.splice(i,0,',');
                    }
                }
            }
        }
        return updatedAmount.join('');
    }

    const dateHandler = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const Months = ['January','February','March','April','May','June','July','August',
                        'September','November','December']; 
        return `${Months[month]} ${year}`;
    }

    return(
        <div 
        className={css.TotalBudget}>
            <div className={css.Date}>{dateHandler()}</div>
             <div className = {css.Total}>&#8377; {amountCommaHandler((props.total.income-props.total.expense).toFixed(2))}</div>
            <BudgetType type='income' value={amountCommaHandler(props.total.income.toFixed(2))}/>
            <BudgetType type='expense' value={amountCommaHandler(props.total.expense.toFixed(2))} perc = {props.expPercentage}/>
        </div>
    );
  
};

export default totalBudget;