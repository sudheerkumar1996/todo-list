import React from 'react';
import '../input-components/input.styles.scss';
import  CustomButton from '../customButton-components/customButton.components';
class InputTask extends React.Component {
render(){
        return(
        <div className='container'>
                 <form onSubmit={this.props.addItem}>
                        <div className='input-container'>
                                <input className='input' placeholder="Enter task"
                                type="text"
                                value={this.props.currentTask}
                                onChange={this.props.handleChange}
                                required/>
                                <div className='button-container'>
                                        <CustomButton type='submit'  taskADD>
                                                 Add Task
                                         </CustomButton>
                                </div> 
                        </div>
                </form> 
        </div>
                )
        }
};
export default InputTask;