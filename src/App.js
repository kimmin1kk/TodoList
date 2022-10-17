import React, {useState} from 'react';
import './App.css';
import './index.css';
import './Components/legacy/TodoBoard';
import TodoBoard from './Components/legacy/TodoBoard';
import './Components/legacy/TodoItem';
import TodoItem from './Components/legacy/TodoItem';

//https://lakelouise.tistory.com/m/121 참고해서 만드는 중
// const root = ReactDOM.createRoot(document.getElementById('root'));

// function App(props) {

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App;

//--------------------------------------------------------------Legacy-------------------------------------------------
function App(props) {

  const [inputValue,setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addItem =() => {
      console.log("입력한 값 :", inputValue);
      setTodoList([...todoList,inputValue])
    }

    return (
    <div className="App">
      <main>
        <input value = {inputValue} type="text" onChange=
        {(event) => setInputValue(event.target.value)}/>
        <button onClick={addItem}>추가</button>
        <TodoBoard todoList={todoList}></TodoBoard>
      </main>
    </div>
  );          
}
export default App;