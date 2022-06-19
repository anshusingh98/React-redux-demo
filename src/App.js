import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import  {AddTodoAction, RemoveTodoAction} from "./actions/TodoAction";

function App() {
  const [todo,setTodo] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;
  const handleSubmit = (e)=> {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };
  const removeHandler =(t) => {
    dispatch(RemoveTodoAction(t));
  };
  
  return (
    <div className="App">
      <header className='App-header'> <h2>Todo List App </h2>
      <form onSubmit={handleSubmit}>
        <input placeholder='enter todo' style={{
          width:350,
        padding:10,
        borderRadius:20,
        border: "none",
        fontSize :20 ,
        }}
        onChange={(e)=>setTodo(e.target.value)}/>
        <button type='submit' style={{
          padding: 12,
          borderRadius : 25,
          fontSize :15,
          marginLeft :20,
        }}
        >Go</button>
          </form>
          <ul className='alltodo'>
            {todos && todos.map((t)=>(<li key={t.id} className='singleTodo'>
              <span className='todoText'>{t.todo}</span>
              <button style={{
          padding: 10,
          borderRadius : 25,
          fontSize :15,
          marginLeft :20,
          color : "black",
          backgroundColor : "white"
        }}
        onClick ={()=>removeHandler(t)}>Delete</button>
            </li>))
            }
            
            </ul></header>
    </div>
  );
}

export default App;
