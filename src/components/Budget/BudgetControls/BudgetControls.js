import React, { Component} from 'react';

import { FaCheckCircle } from 'react-icons/fa'
import Input from '../../UI/Input/Input';
// import Button from '../../UI/Button/Button';
import css from './BudgetControl.module.css';

class BudgetControl extends Component{

    state = {
        controlForm:{
            type:{
                elementConfig:{
                    input:'select',
                    label:'type'
                },
                validation:{},
                valid: true,
                value:'+'
            },
            description:{
                elementConfig:{
                    input:'text',
                    label:'description'
                },
                validation:{
                    required : true
                },
                valid: true,
                value:''
            },
            amount:{
                elementConfig:{
                    input:'text',
                    label:'amount'
                },
                validation:{
                    required:true,
                    shouldBe: 'number'
                },
                valid: true,
                value:''
            }
            
        },
        submitDisabled : true
    }

    inputChangedHandler = (event,field) => {
        const updatedControlForm = {...this.state.controlForm}
        updatedControlForm[field].value = event.target.value.trim();
        const valid = this.checkValidityHandler(updatedControlForm[field]);
        updatedControlForm[field].valid = valid;
        this.setState({controlForm: updatedControlForm,submitDisabled: false});
        // console.log(this.state);
    }

    checkValidityHandler = (singleControlForm) => {
        let reqValid = true;
        let shouldValid = true;
        if(singleControlForm.validation){
            if(singleControlForm.validation.required){
                reqValid = singleControlForm.value.trim() !== '';
            }

            if(singleControlForm.validation.shouldBe){
                switch(singleControlForm.validation.shouldBe){
                    case 'number':
                        shouldValid = !(isNaN(singleControlForm.value.trim()));
                        break;
                    default:
                        shouldValid = false;
                }
            }
        }

        return reqValid === shouldValid;
    }


    render(){
        
        //Array of single input fields
        let transaction = [];

        for(let key in this.state.controlForm){
            transaction.push({
                id: key,
                elementConfig: this.state.controlForm[key].elementConfig,
                value: this.state.controlForm[key].value,
                valid: this.state.controlForm[key].valid
            });
        }

        let show = this.state.submitDisabled ? 'none' : 'inline-block';

        return(
            <div className={css.BudgetControl}>

                {transaction.map(el => (
                    <Input
                    valid = {el.valid}
                    key = {el.id}
                    value={el.value}
                    type = {el.elementConfig.input}
                    placeholder = {el.elementConfig.label}
                    changed={(event) => this.inputChangedHandler(event,el.id)}/>
                ))}
                <FaCheckCircle 
                className={css.Submit} 
                onClick={() => this.props.submit(this.state.controlForm)}
                style = {{'display': show}}/>
                {/* <Button type='right' clicked={() => this.props.submit(this.state.controlForm)}>Submit</Button> */}
            </div>
        );
    }
    
}

export default BudgetControl;