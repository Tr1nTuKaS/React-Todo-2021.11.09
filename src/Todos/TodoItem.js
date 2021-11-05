function TodoItem(props) {
  // uncheked styles item, fa-circle-thin
  // checked styles item line-through, fa-check-circle

  // add title from props
  return (
    <li className='item'>
      <i className='fa fa-circle-thin make-done' aria-hidden='true'></i>
      <span className='text'> {props.title} </span>
      <i className='fa fa-pencil edit-icon' aria-hidden='true'></i>
      <i className='fa fa-trash delete-icon' aria-hidden='true'></i>
    </li>
  );
}

export default TodoItem;
