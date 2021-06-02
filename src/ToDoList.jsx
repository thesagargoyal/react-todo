import React from 'react';

const ToDoList = (props) => {

    const deleteItems = () => {
        
    }

    return(
       <>
        <div className="todo_style">
            <i class="fa fa-times" aria-hidden="true"
                onClick={ deleteItems }
            />
            <li> {props.text} </li>;
        </div>
       </> 
    ); 
}

export default ToDoList;