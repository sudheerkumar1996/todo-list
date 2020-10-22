import React from 'react';
import '../label-component/label.styles.scss';
const CustomLabel =({name})=>(
    <div className='label-container'>
            <label>{name}</label> 
    </div> 
);
export default CustomLabel;