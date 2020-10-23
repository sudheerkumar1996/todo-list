import React from 'react';
import '../checkbox-component/checkbox.styles.scss';
class CheckBox extends React.Component{
    render(){
        const status='checked'
        return(
            <div className='checkbox-container' >
                <input type='checkbox'
                  onChange={this.props.onchange} />    
            </div>
        );
    }
}
{/* <label htmlFor={id} className={todo.complete ? "active" : ""}>
<input type="checkbox" id={id} checked={todo.complete}
onChange={() => checkComplete(id)} />
{todo.name}
</label> */}
export default CheckBox;