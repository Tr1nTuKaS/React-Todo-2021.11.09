import { useState } from 'react';
// TodoAddNew
function TodoAddNew(props) {
  // create newTitle State
  const [newTitle, setNewTitle] = useState('');
  // bind state to input
  const handleNewTodoInput = (e) => {
    setNewTitle(e.target.value);
  };
  return (
    <div className='add-item'>
      <i
        onClick={props.onAddNewTodo}
        id='add-todo-btn'
        className='fa fa-plus-circle'
        aria-hidden='true'
      ></i>
      <input
        value={newTitle}
        onChange={handleNewTodoInput}
        type='text'
        id='input'
        placeholder='Add todo'
      />
    </div>
  );
}

export default TodoAddNew;
