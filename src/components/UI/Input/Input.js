import React from 'react';

// more input types will be added as needed
const input = (props) => {
    let input = <input />;

    switch (props.inputType) {
        case 'text':
            input = <input type='text'
                placeholder={props.placeholder}
                onChange={props.changed} />;
            break;
        case 'file':
            input = <input type='file'
                onChange={props.changed} />;
            break;
        case 'select':
            input = <select>
                {props.options.map(option => <option value={option.value}>{option.value}</option>)}
            </select>
            break;
        case 'textarea':
            input = <textarea name="" id="" cols="30" rows="10">
                {props.placeholder}
            </textarea>
            break;
        default:
            throw new Error();
    }
    return input;
}


export default input;