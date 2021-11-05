import './styles/TodoStyles.css';
import TodoHeader from './Todos/TodoHeader';
import TodoItem from './Todos/TodoItem';

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
  // create state todosArr using useState
  return (
    <div className='container'>
      <TodoHeader />
      <section className='content'>
        <ul id='list' className='list'>
          <li className='item line-through'>
            <i className='fa fa-check-circle make-done' aria-hidden='true'></i>
            <span className='text'>Drink coffe</span>
            <i className='fa fa-pencil edit-icon' aria-hidden='true'></i>
            <i className='fa fa-trash delete-icon' aria-hidden='true'></i>
          </li>
          <li className='item'>
            <i className='fa fa-circle-thin make-done' aria-hidden='true'></i>
            <span className='text'>Go to park</span>
            <i className='fa fa-pencil edit-icon' aria-hidden='true'></i>
            <i className='fa fa-trash delete-icon' aria-hidden='true'></i>
          </li>
          <li className='item'>
            <i className='fa fa-circle-thin make-done' aria-hidden='true'></i>
            <span className='text'>Walk a dog</span>
            <i className='fa fa-pencil edit-icon' aria-hidden='true'></i>
            <i className='fa fa-trash delete-icon' aria-hidden='true'></i>
          </li>
          <TodoItem />
        </ul>
        <div className='add-item'>
          <i
            id='add-todo-btn'
            className='fa fa-plus-circle'
            aria-hidden='true'
          ></i>
          <input type='text' id='input' placeholder='Add todo' />
        </div>
      </section>
    </div>
  );
}

export default TodoListPage;
