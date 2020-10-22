import React from 'react';
import '../taskListContainer-components/taskListContainer.styles.scss';
import Task from '../task/task.component';

class TaskListContainer extends React.Component{
    render(){
        return (
            <div className='taskListContainer'>
                 {this.props.task.map(item =>
                 <div  key={item.id}>
                   <Task id={item.id} name={item.taskName} status={item.status}
                    deleteTask={this.props.deleteTask}
                   />
                   </div>
                )}
            </div>
        );
    }
}
export default TaskListContainer;