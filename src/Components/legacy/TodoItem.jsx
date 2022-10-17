



//--------------------Legacy------------------------------
import React from 'react';
function TodoItem(props) {
    const test = 0;
    function remvItem () {
        console.log("여기 맞음");
    }
    return(
        <div className="todo-item">
            {props.item}
            <p className="remv-item">
            <button onClick={remvItem}>삭제</button>
            </p>
        </div>

    )
}

export default TodoItem;



// import React from 'react';

// function TodoItem(props) {
//     return (
//         <div className="todo-item">
//             {props.item}
//         </div>
//     )
//     //요거를 삭제를 해야한다.
// }
// export default TodoItem;  #Legacy