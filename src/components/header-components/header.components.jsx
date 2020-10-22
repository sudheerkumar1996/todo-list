import React from 'react';
import '../header-components/header.styles.scss';
class Header extends React.Component{
    render(){
        return(
                <div className='header'>
                    <h1 className='header-name'> Todo List</h1>
                </div>
        );
    }
}
export default Header;
