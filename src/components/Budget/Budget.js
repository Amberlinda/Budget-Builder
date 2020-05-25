import React, {Component} from 'react';
import BudgetControls from './BudgetControls/BudgetControls';
import TotalBudget from './TotalBudget/TotalBudget';
import BudgetDisplay from './BudgetDisplay/BudgetDisplay';

class Budget extends Component{

    state = {
        total: {
            income: 0,
            expense: 0
        },
        details: [],
        expPercentage:0,
        formValid: false
    }

    createIdHandler = () => {
        const rand = Math.floor(Math.random() * 100);
        const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
                        'q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
                        'Q','R','S','T','U','V','W','X','Y','Z' ];
        const randAlph = alph[Math.floor(Math.random() * alph.length-1)];
        return randAlph + rand;
    }

    submitHandler = (controlForm) => {
        let formValid = true;

        for(let key in controlForm){
            if(controlForm[key].valid === false){
                formValid = false;
            }
        }

        if(formValid){
            const updatedDetails = [...this.state.details];
            let transaction = {};
            for( let key in controlForm){
                if(key === 'type'){
                    const type = controlForm[key].value === '+' ? 'inc' : 'exp';
                    transaction[key] = type; 
                }else{
                    transaction[key] = controlForm[key].value;
                }
            }
            transaction = {
                ...transaction,
                percentage: 0,
                id:this.createIdHandler()
            };
            updatedDetails.push(transaction);
            this.setState({details: updatedDetails, formValid: formValid});
            this.budgetChangeHandler(updatedDetails);
        }else{
            alert('Please give valid inputs.');
        }   
    }

    budgetChangeHandler = (updatedDetails) => {
        // console.log(updatedDetails);
        const updatedTotal = {...this.state.total};
        let updatedIncome = 0;
        let updatedExpense = 0;
        updatedDetails.forEach(el => {
            if(el.type === 'inc'){
                updatedIncome += parseFloat(el.amount);
            }else if(el.type === 'exp'){
                updatedExpense += parseFloat(el.amount);
                const perc = this.percentageHandler(parseFloat(el.amount),updatedIncome);
                el.percentage = perc;
            }
        });

        updatedTotal.income = updatedIncome;
        updatedTotal.expense = updatedExpense;

        const percentage = this.percentageHandler(updatedExpense,updatedIncome);
        this.setState({total: updatedTotal,expPercentage: percentage});
    }

    percentageHandler = (expense,income) => {
        const perc = (expense/income) * 100;
        return perc;
        
    }

    deleteItemHandler = (id) => {
        if(id){
            const updatedDetails = [...this.state.details];
            const index = updatedDetails.findIndex(currentValue => currentValue.id === id);
            updatedDetails.splice(index,1);
            this.setState({details: updatedDetails});
            this.budgetChangeHandler(updatedDetails);
        }
    }


    render(){
        return(
            <div>
                <TotalBudget 
                expPercentage = {this.state.expPercentage}
                total = {this.state.total}/>
                <BudgetControls 
                submit = {this.submitHandler}/>
                <BudgetDisplay 
                details = {this.state.details}
                deleteItem = {this.deleteItemHandler}/>
            </div>
        );
    }
}

export default Budget;

// export const GlobalBudget = new Budget();
