function TodoItem(props) {
  // uncheked styles item, fa-circle-thin
  // checked styles item line-through, fa-check-circle

  const itemClasses = () => {
    return props.isDone ? 'item line-through' : 'item';
  };
  const checkCircleClasses = () => {
    return `fa fa-${props.isDone ? 'check-circle' : 'circle-thin'}`;
  };
  // add title from props

  const sendDeleteId = (e) => {
    props.onTodoDelete(props.id);
  };

  return (
    <li className={itemClasses()}>
      <i className={checkCircleClasses()} aria-hidden='true'></i>
      <span className='text'>
        {' '}
        {props.title} id: {props.id}{' '}
      </span>
      <i className='fa fa-pencil edit-icon' aria-hidden='true'></i>
      <i
        onClick={sendDeleteId}
        className='fa fa-trash delete-icon'
        aria-hidden='true'
      ></i>
    </li>
  );
}

export default TodoItem;
