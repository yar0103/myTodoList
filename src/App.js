import { useState } from 'react';
import './App.css';

const TodoWriteForm = ({ addTodo:_addTodo }) => {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const addTodo = () => {
    if(newTodoTitle.trim().length == 0) return;

    _addTodo(newTodoTitle);
    setNewTodoTitle('');
  }

  return (
    <div className="addInput flex justify-content-center">
      <input
        type="text"
        placeholder="새 할일"
        style={{ borderRadius: 30, height: 50, fontSize: 23, paddingLeft: 10 }}
        value={newTodoTitle}
        onChange={(e) => {
          setNewTodoTitle(e.target.value);
        }}
      />
      <button className="btn btnNone">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="green"
          onClick={ addTodo }
          class="bi bi-plus-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
        </svg>
      </button>
    </div>
  );
};

const TodoListItem = ({ todo, i, removeTodo:_removeTodo, modifyTodo:_modifyTodo }) => {
  console.log(`i : ${i}`);

  const [change, setChange] = useState(false);
  const [newTitle, setNewTitle] = useState(todo);

  const removeTodo = () => {
    _removeTodo(i)
  };

  const modifyTodo = () => {
    if(newTitle.trim().length == 0) return;
    _modifyTodo(i, newTitle.trim());
    setChange(false)
  }

  const changeTodo = () => {
    setChange(true);
  };

  const cancel = () => {
    setNewTitle(todo);
    setChange(false);
  };

  return (
    <div className="addTodoList">
      <div className="flex">
        <span className="no">{i + 1}</span>.
        <span className="ms-3">
          {change ? (
            <div className="flex">
              <input
                type="text"
                placeholder="할 일 수정"
                value={newTitle}
                onChange={(e) => {
                  setNewTitle(e.target.value);
                }}
                style={{
                  borderRadius: 30,
                  height: 50,
                  fontSize: 23,
                  paddingLeft: 10,
                }}
              />
              <div className='flex'>
                <button name='changeCancle' className="btn btnNone" onClick={cancel}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="red"
                    class="bi bi-x-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
                  </svg>
                </button>
                  {/* 여기부터 onclick 넣어줘야함*/}
                <button name='changeOk' className="btn btnNone editBox" onClick={modifyTodo}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="green"
                    class="bi bi-check-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            todo
          )}
        </span>
      </div>
      <div className="btnBox">
        <button className="btn btn-outline-primary btnNone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            onClick={changeTodo}
            class="bi bi-pen-fill"
            viewBox="0 0 16 16"
          >
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
          </svg>
        </button>
        <button className="btn btn-outline-danger btnNone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            onClick={removeTodo}
            class="bi bi-trash3-fill"
            viewBox="0 0 16 16"
          >
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const TodoList = ({ todos, removeTodo, modifyTodo }) => {
  return (
    <div>
      {todos.map((todo, i) => (
        <TodoListItem
          key={i}
          i={i}
          todo={todo}
          removeTodo={removeTodo}
          modifyTodo={modifyTodo}
        />
      ))}
    </div>
  );
};

const CurrentTime = () => {
  const today = new Date();
  const setYear = `${today.getFullYear()}`;
  const setMonth = `${today.getMonth() + 1}`;
  const setDay = `${today.getDate()}`;
  return (
    <div className="container headerInfo">
      <div className="year lh-1">{setYear}</div>
      <div className="monthDay">
        {setMonth}/{setDay}
      </div>
    </div>
  );
};

function App() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (newTitle) => {
    //공백상태도 입력되기 때문에 검사
    if (newTitle.trim().length == 0) return;
    setTodos([...todos, newTitle.trim()]);
  };

  const removeTodo = (i) => {
    const newTodos = todos.filter((_, _i) => _i != i);
    setTodos(newTodos);
  };

  const modifyTodo = (i, todo) => {
    const newTodos = todos.map((_todo, _i) => _i != i ? _todo : todo);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="App-header">
        <div className="container">
          <CurrentTime />
          <TodoWriteForm
            addTodo={addTodo}
          />
          <TodoList todos={todos} removeTodo={removeTodo} modifyTodo={modifyTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
