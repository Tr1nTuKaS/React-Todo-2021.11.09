import styled from "styled-components";
import { useState } from "react";

const Item = styled.li`
  padding: 15px;
  border-bottom: 1px solid lightgray;
  text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
  color: ${(props) => (props.isDone ? "gray" : "black")};
  & i {
    font-size: 18px;
    cursor: pointer;
  }
  & i:last-child {
    float: right;
  }
  & input {
    font-size: 1rem;
    padding: 6px 8px;
  }
`;

function TodoItem({ title, isDone, onTodoDelete, id }) {
  const [isEditOn, setIsEditOn] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  // uncheked styles item, fa-circle-thin
  // checked styles item line-through, fa-check-circle

  const checkCircleClasses = () => {
    return `fa fa-${isDone ? "check-circle" : "circle-thin"}`;
  };
  // add title from props

  const sendDeleteId = (e) => {
    onTodoDelete(id);
  };

  const handleEditLocal = () => {
    // send updated title with props
    if (isEditOn) {
      console.log("update", id, editedTitle);
    }
    setIsEditOn(!isEditOn);
  };

  return (
    <Item isDone={isDone}>
      <i className={checkCircleClasses()} aria-hidden="true"></i>
      {isEditOn ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      ) : (
        <span className="text">
          {" "}
          {title} id: {id}{" "}
        </span>
      )}
      <i
        onClick={handleEditLocal}
        className="fa fa-pencil edit-icon"
        aria-hidden="true"
      ></i>
      <i
        onClick={sendDeleteId}
        className="fa fa-trash delete-icon"
        aria-hidden="true"
      ></i>
    </Item>
  );
}

export default TodoItem;
