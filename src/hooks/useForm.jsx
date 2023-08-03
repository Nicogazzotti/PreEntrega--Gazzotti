/* eslint-disable no-case-declarations */
import { useReducer } from "react"
import validarInput from "../utils/funciones/form-validacion"


const INPUT_ACTIONS={
    INPUT_CHANGE: 'INPUT_CHANGE',
    CLEAR_INPUTS: 'CLEAR_INPUTS',
    SET_DATA: 'SET_DATA',
    INPUT_FOCUS: 'INPUT_FOCUS',
    INPUT_BLUR: 'INPUT_BLUR',
}

const formReducer= (state, action)=>{
    switch (action.type) {
        case INPUT_ACTIONS.INPUT_CHANGE: 
            const {name,value,error,hasError,active,isFormValid}=action.data
            return{
                ...state,
                [name]: {
                    value,
                    error,
                    hasError,
                    active,
                },
                isFormValid,
            }
        case INPUT_ACTIONS.INPUT_FOCUS:
            return{
                ...state,
                [action.data.name]:{
                    ...state[action.data.name],
                    active: true,
                }
            }
        case INPUT_ACTIONS.INPUT_BLUR:
            return{
                ...state,
                [action.data.name]:{
                    ...state[action.data.name],
                    active: false,
                }
            }
        case INPUT_ACTIONS.CLEAR_INPUTS:
            return action.data
        
        default:
            return state
    }
}

export const useForm=(initialState)=>{
    const [formState, dispatchFormState]= useReducer(formReducer, initialState)
    
    const inputHandler= ({name, value})=>{
        const {error,hasError} = validarInput({type:name, value})
        let isFormValid= true

        for(const key in formState){
            const item= formState[key]
            if(key!== name && hasError){
                isFormValid=false
                break
            }else if(key !== name && item.hasError){
                isFormValid=false
                break
            }
        }
        
        dispatchFormState({
            type: INPUT_ACTIONS.INPUT_CHANGE,
            data:{
                name,
                value,
                error,
                hasError,
                isFormValid,
                active:true
            }
        })
    }

    const clearInputs=({formState})=>{
        dispatchFormState({
            type: INPUT_ACTIONS.CLEAR_INPUTS,
            data: formState,
        })
    }
    const inputFocus= ({name})=>{
        dispatchFormState({
            type: INPUT_ACTIONS.INPUT_FOCUS,
            data: {
                name,
            }
        })
    }
    const inputBlur= ({name})=>{
        dispatchFormState({
            type: INPUT_ACTIONS.INPUT_BLUR,
            data:{
                name,
            }
        })
    }

    return [formState, inputHandler, clearInputs,inputFocus,inputBlur]
}