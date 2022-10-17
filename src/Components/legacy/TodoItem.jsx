/*
각 할 일에 대한 정보를 렌더링 해주는 컴포
좌측에 있는 원을 누르면 할 일의 완료 여부를 toggle 할 수 있음
할 일이 완료되었을 땐 좌측에 체크가 나타나고 텍스트의 색상이 연해짐
마우스를 올리면 휴지통 아이콘이 나타나고 이를 누르면 항목이 삭제됨.
*/







//--------------------Legacy------------------------------
import React from 'react';
function TodoItem(props) {
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