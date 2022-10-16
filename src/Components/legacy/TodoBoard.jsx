import React from 'react';
import TodoItem from "../TodoItem";
function TodoBoard(props) {


    return (
        <div> 
            <h1>Todo List</h1> 
            {props.todoList.map((item => <TodoItem item ={item}/>))}
        </div>
        //큰 판 하나를 표현한거임 그러므로 TodoItem도 포함이 되어 있다~
    )
}
export default TodoBoard;