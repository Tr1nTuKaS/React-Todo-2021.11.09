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
  const [todosArr, setTodosArr] = useState(initTodos);

  const [todoIdCounter, setTodoIdCounter] = useState(4);
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

  const handleTodoDelete = (deleteId) => {
    console.log('you want to delete todo with id', deleteId);
    // call handleTodoDelete from todo item
    //  setTodosArr with state copy without the one obj that has id === id
    // filter
    const filteredMainArr = todosArr.filter((tObj) => tObj.id !== deleteId);
    setTodosArr(filteredMainArr);
  };

  // handleEditTodo - pass it down to TodoItem
  // find item with id === id, update its title without modifying original arr

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
