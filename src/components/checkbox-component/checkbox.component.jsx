import React from 'react';
import '../checkbox-component/checkbox.styles.scss';
class CheckBox extends React.Component{
    render(){
        const status='checked'
        const {id}=this.props;
        return(
            <div className='checkbox-container' >
                <input type='checkbox'
                  onChange={()=>this.props.onchange(id,status)} />    
            </div>
        );
    }
}
export default CheckBox;