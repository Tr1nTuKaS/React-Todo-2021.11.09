import TodoItem from './TodoItem';

// TodoList
function TodoList(props) {
  // console.log(props.todos);
  // generate todos
  return (
    <ul id='list' className='list'>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} isDone={todo.isDone} />
      ))}
    </ul>
  );
}

export default TodoList;
