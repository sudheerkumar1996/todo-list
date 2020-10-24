import React from 'react'
import '../task/task.styles.scss';
import CheckBox from '../checkbox-component/checkbox.component'

import CustomButton from '../customButton-components/customButton.components';
class Task extends React.Component{
  render(){
   const deleteStatus='deleted';
    const {id,name}=this.props;
    return(
      <div className='task-container' key={id}>
      <div className='check-box'> <CheckBox id={id} name={name} status={deleteStatus} 
                                    onchange={this.props.onchange}/>
       </div>
      <div className='delete-button'>
              <CustomButton type='button' onClick={()=>this.props.deleteTask(id,deleteStatus)} inverted>
                 Delete 
                </CustomButton>    
      </div>
   </div>
    );
  }
}
export default Task;

// onClick={()=>this.props.deleteTask(id)}