import { useState } from 'react';
import './App.css';

const TodoWriteForm = ({ newTodoTitle, setNewTodoTitle, addTodo }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="새 할일을 입력해주세요"
        value={newTodoTitle}
        onChange={(e) => {
          setNewTodoTitle(e.target.value);
        }}
      />
      &nbsp;
      <button onClick={addTodo}>할 일 추가</button>
    </div>
  );
};

const TodoListItem = ({todo, todos, i, setTodos}) => {
  console.log(`i : ${i}`);
  
  const removeTodo = () => {
    const newTodos = todos.filter((_, _i) => i != _i);
    setTodos(newTodos);
  }
  return(
    <li>{i+1}. {todo} <button onClick={removeTodo}>del</button></li>
  )
}

const TodoList = ({todos, setTodos}) => {
  return (
    <div>
      <ul>
        {todos.map((todo, i) => (
          <TodoListItem key={i} i={i} todo={todo} todos={todos} setTodos={setTodos}/>
        ))}
      </ul>
    </div>
  );
};

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const addTodo = () => {
    //공백상태도 입력되기 때문에 검사
    if (newTodoTitle.trim().length == 0) return;
    setTodos([...todos, newTodoTitle.trim()]);
    setNewTodoTitle('');
  };

  return (
    <div className="App">
      <TodoWriteForm
        newTodoTitle={newTodoTitle}
        setNewTodoTitle={setNewTodoTitle}
        addTodo={addTodo}
      />
      <hr />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
