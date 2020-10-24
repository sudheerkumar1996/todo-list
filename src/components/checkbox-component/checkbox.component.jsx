import React from 'react';
import '../checkbox-component/checkbox.styles.scss';
import CustomLabel from '../label-component/label.component';
class CheckBox extends React.Component{
    render(){
        const status='done';
        const {id,name}=this.props;
        return(
            <div className='checkbox' >
                <input type='checkbox' 
                  onClick={()=>this.props.onchange(id,status)} />
                  <CustomLabel className='Label' name={name}></CustomLabel>   
            </div>  
        );
    }
}
export default CheckBox;
