import TodoItem from './TodoItem';

// TodoList
function TodoList(props) {
  console.log(props.todos);
  // generate todos
  return (
    <ul id='list' className='list'>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
}

export default TodoList;
