import css from '../styles/TodoList.module.css';

import TodoItem from './TodoItem';

// TodoList
function TodoList(props) {
  // console.log(props.todos);
  // generate todos
  return (
    <ul id='list' className={css.list}>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          isDone={todo.isDone}
          id={todo.id}
          onTodoDelete={props.onTodoDelete}
        />
        // <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
