import React from 'react';
import '../input-components/input.styles.scss';
import  CustomButton from '../customButton-components/customButton.components';
class InputTask extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//             task:[],
//             count:0,
//             currentTask:"",

//         }
//     }
//     handleChange = (event) => {
//         event.persist();
//         this.setState({
//           currentTask: event.target.value,
//         });
//       };

//     addItem = (event) => {
//         event.preventDefault();
//         let taskObject={
//             id:this.state.count+1,
//             taskName:this.state.currentTask,
//             status:'pending'
//         }
//         // this.setState({count:taskObject.id});
//         this.setState({
//             task:taskObject,
//             count:taskObject.id
//           },console.log(this.state.task));
// }

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