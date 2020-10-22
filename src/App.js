import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/header-components/header.components';
import AddTaskContainer from './components/addTaskContainer-components/addTaskContainer.components';
import TaskListContainer from './components/taskListContainer-components/taskListContainer.components';
class App extends Component {
 constructor(props){
        super(props);
        this.state={
            task:[],
            count:0,
            currentTask:"",
        }
    }
    handleChange = (event) => {
        event.persist();
        this.setState({
          currentTask: event.target.value,
        });
      };

    addItem = (event) => {
        event.preventDefault();
        let tasks = [];
        let taskObject={
            id:this.state.count+1,
            taskName:this.state.currentTask,
            status:'pending'
        }

        tasks = [...this.state.task]
        tasks.push(taskObject)
        this.setState({
            task:tasks,
            count:taskObject.id,
            currentTask:""
          },console.log(this.state.task));
}
// statechange=(event)=>{
//   this.setState({

//   })
// }
deleteTask=(itemId)=>{
  const newTask=this.state.task.filter(task=>
    task.id!==itemId);
    this.setState({
      task:newTask
    });
}

  render(){
  return (
    <div className='app-container'>
    <Header/>
    <AddTaskContainer addItem={this.addItem} handleChange={this.handleChange} 
    currentTask={this.state.currentTask}/>
    <TaskListContainer task={this.state.task} deleteTask={this.deleteTask}/>
    </div>

  );
  }
}

export default App;
