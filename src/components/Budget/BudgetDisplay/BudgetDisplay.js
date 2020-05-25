import React from 'react';

import SingleTransaction from './SingleTransaction/SingleTransaction';
import css from './BudgetDisplay.module.css';

const budgetDisplay = props => {

    const income = [];
    const expense = [];
    let limit = null;

    props.details.forEach((el,i) => {
        if(el.type === 'inc' && i < 5){
            income.push(el);
        }else if(el.type === 'exp' && i < 5){
            expense.push(el);
        }
       
        if(i === 4) limit = <p className = {css.Limit}>To view all your budgets visit the budgets page.</p>;
    });


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

    return (
            <div className={css.IncExpContainer}>
                <h1>Your Expenses</h1>
                {limit}
                <div className={css.BudgetDisplay}>
                    <div className={css.Income}>
                        <h2>Income</h2>
                        {income.map((el,i) => (
                            <SingleTransaction
                            key = {el.id}
                            type = {el.type}
                            description = {el.description}
                            amount = {amountCommaHandler(el.amount)}
                            delete = {() => props.deleteItem(el.id)}/>
                        ))}
                    </div>
                    <div className={css.Line}></div>
                    <div className={css.Expense}>
                        <h2>Expense</h2>
                        {expense.map((el,i) => (
                            <SingleTransaction
                            key = {el.id}
                            type = {el.type}
                            description = {el.description}
                            amount = {amountCommaHandler(el.amount)}
                            percentage = {el.percentage}
                            delete = {() => props.deleteItem(el.id)}/>
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default budgetDisplay;