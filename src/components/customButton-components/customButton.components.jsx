import React from 'react';
import '../customButton-components/customButton.styles.scss';
class CustomButton extends React.Component{
        render(){
                const {children,inverted,taskADD, ...props}=this.props;
                return(
                        <button className={`${inverted ? 'inverted': ''}
                        ${taskADD ? 'taskADD' : ''} 
                        todo-button`} {...props}
                        >{children}</button>
                );
        }
}
export default CustomButton; 
// const CustomButton = ({children, isGoogleSignIn,inverted, ...otherProps}) => (
//     <button
//      className={`${inverted ? 'inverted' : ''} 
//      ${isGoogleSignIn ? 'google-sign-in' : ''}  
//      custom-button`} 
//      {...otherProps}>
//      {children}
//     </button>
// );