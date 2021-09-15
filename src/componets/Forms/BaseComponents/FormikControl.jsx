import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import CheckBoxGroup from './CheckBoxGroup';
import Select from './Select';
import DatePiker from './DatePiker';
import RadioButtons from './RadioButtons';

const FormikControl = (props) =>{
    const {control, ...rest} = props
    switch(control){
        case 'input' :
            return <Input {...rest}/>
        case 'textarea':
            return <TextArea {...rest}/>
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <RadioButtons {...rest}/>
        case 'checkbox':
            return <CheckBoxGroup {...rest}/>
        case 'date':
            return <DatePiker {...rest}/>
        default: return null
    } 
    
}
export default FormikControl