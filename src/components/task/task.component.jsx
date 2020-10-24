import React from 'react'
import '../task/task.styles.scss';
import CheckBox from '../checkbox-component/checkbox.component'
import CustomLabel from '../label-component/label.component';
import CustomButton from '../customButton-components/customButton.components';
class Task extends React.Component{
  render(){
    const {id,name,status}=this.props;
    return(
      <div className='task-container' key={id}>
      <div className='check-box'> <CheckBox id={id} status={status} 
                                    onchange={this.props.onchange}/>
       </div>
      <div className='Label'>  <CustomLabel name={name}/></div>  
      <div className='delete-button'>
              <CustomButton type='button' onClick={()=>this.props.deleteTask(id)} inverted>
                 Delete 
                </CustomButton>    
      </div>
   </div>
    );
  }
}
export default Task;

// onClick={()=>this.props.deleteTask(id)}