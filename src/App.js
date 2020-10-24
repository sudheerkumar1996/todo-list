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
deleteTask=(itemId,itemStatus)=>{
  const newTaskThree=[...this.state.task];
  newTaskThree[newTaskThree.findIndex(obj=>obj.id===itemId)].status=itemStatus;
  this.setState({
    task:newTaskThree
},console.log(this.state.task)); 
  const newTask=this.state.task.filter(task=>
    task.id!==itemId);
    this.setState({
      task:newTask
    });
}
onchange=(itemId,status)=>{
const newTaskList=[...this.state.task];
newTaskList[newTaskList.findIndex(obj=>obj.id===itemId)].status=status;
this.setState({
  task:newTaskList
},console.log(this.state.task));
}
  render(){
  return (
    <div className='app-container'>
    <Header/>
    <AddTaskContainer addItem={this.addItem} handleChange={this.handleChange} 
    currentTask={this.state.currentTask}/>
    <TaskListContainer 
    task={this.state.task} 
    deleteTask={this.deleteTask} 
    onchange={this.onchange}
    />
    </div>
  );
  }
}
export default App;
