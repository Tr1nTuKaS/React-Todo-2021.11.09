import './styles/TodoStyles.css';
import { useState } from 'react';
import TodoAddNew from './Todos/TodoAddNew';
import TodoHeader from './Todos/TodoHeader';
import TodoList from './Todos/TodoList';

const initTodos = [
  {
    id: 1,
    title: 'Drink coffe',
    isDone: false,
  },
  {
    id: 2,
    title: 'Go to park',
    isDone: true,
  },
  {
    id: 3,
    title: 'Make a pie',
    isDone: false,
  },
];

function TodoListPage() {
  const [todoIdCounter, setTodoIdCounter] = useState(4);
  const [todosArr, setTodosArr] = useState(initTodos);
  // create state todosArr using useState
  const handleAddNewTodo = (title) => {
    console.log('add new');
    const newTodoObj = {
      id: todoIdCounter,
      title: title,
      isDone: false,
    };
    const newTodoArrState = [...todosArr, newTodoObj];
    setTodosArr(newTodoArrState);
    setTodoIdCounter(() => todoIdCounter + 1);
  };

  const handleTodoDelete = (id) => {
    console.log('you want to delete todo with id', id);
    // call handleTodoDelete from todo item
    //  setTodosArr with state copy without the one obj that has id === id
    // filter
  };

  return (
    <div className='container'>
      <TodoHeader />
      <section className='content'>
        <TodoList todos={todosArr} onTodoDelete={handleTodoDelete} />
        <TodoAddNew onAddNewTodo={handleAddNewTodo} />
      </section>
    </div>
  );
}

export default TodoListPage;
