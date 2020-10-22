import React from 'react';
import '../checkbox-component/checkbox.styles.scss';
class CheckBox extends React.Component{
    render(){
        return(
            <div className='checkbox-container'>
                 <input type='checkbox'/>      
            </div>
        );
    }
}
// const CheckBox =()=>(
//     <div className='checkbox-container'>
//             <input type='checkbox'/>
//     </div>
// );
export default CheckBox;