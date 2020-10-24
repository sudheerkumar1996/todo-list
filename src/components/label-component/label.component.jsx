import React from 'react';
import '../label-component/label.styles.scss';
class  CustomLabel extends React.Component{
    render(){
         const {name}=this.props;
        return(
            <label className='Label' >{name}</label>      
        );
    }
}
export default CustomLabel;