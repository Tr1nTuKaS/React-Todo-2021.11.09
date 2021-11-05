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
  // create state todosArr using useState
  const handleAddNewTodo = () => {
    console.log('add new');
    const newTodoObj = {
      id: 4,
      title: 'I am new todo',
      isDone: false,
    };
    const newTodoArrState = [...todosArr, newTodoObj];
    setTodosArr(newTodoArrState);
  };
  return (
    <div className='container'>
      <TodoHeader />
      <section className='content'>
        <TodoList todos={todosArr} />
        <TodoAddNew onAddNewTodo={handleAddNewTodo} />
      </section>
    </div>
  );
}

export default TodoListPage;
