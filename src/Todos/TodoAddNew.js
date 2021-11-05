// TodoAddNew
function TodoAddNew() {
  return (
    <div className='add-item'>
      <i id='add-todo-btn' className='fa fa-plus-circle' aria-hidden='true'></i>
      <input type='text' id='input' placeholder='Add todo' />
    </div>
  );
}

export default TodoAddNew;
