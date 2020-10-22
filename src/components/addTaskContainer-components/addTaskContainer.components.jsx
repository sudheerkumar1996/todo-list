import React from 'react';
import InputTask from '../input-components/input.components';
import '../addTaskContainer-components/addTaskContainer.styles.scss';
class AddTaskContainer extends React.Component{
    render(){
        return(
            <div className='addTask-Container'>
                    <div className='input-container'>
                    <InputTask addItem={this.props.addItem} 
                    handleChange={this.props.handleChange}
                     currentTask={this.props.currentTask}/>
                    </div>  
            </div>
        );
    }
}
export default AddTaskContainer;