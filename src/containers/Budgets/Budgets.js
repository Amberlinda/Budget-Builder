import React from 'react';
// import {GlobalBudget} from '../../components/Budget/Budget';
// import SingleTransaction from '../../components/Budget/BudgetDisplay/SingleTransaction/SingleTransaction';

const budgets = () => {

    // const globalDetails = GlobalBudget.state.details;

    let component = null;

    // globalDetails.forEach(el => {
    //     if(el.type === 'inc'){
    //         component.push(<SingleTransaction
    //         key = {el.id}
    //         type = {el.type}
    //         description = {el.description}
    //         amount = {el.amount}
    //         delete = {() => GlobalBudget.deleteItemHandler(el.id)}/>);
    //     }else if(el.type === 'exp'){
    //         component.push(<SingleTransaction
    //         key = {el.id}
    //         type = {el.type}
    //         description = {el.description}
    //         amount = {el.amount}
    //         delete = {() => GlobalBudget.deleteItemHandler(el.id)}/>);
    //     }
    // })

    return(
        <React.Fragment>
            <h1>Total Expenses</h1>
            {component}
        </React.Fragment>
    );
}

export default budgets;