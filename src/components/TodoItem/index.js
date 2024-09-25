// Write your code here
import {useState} from 'react'

import './index.css'

const TodoItem = props => {
  const {deleteItem, itemDetails, onEditedTask} = props
  const {id, title} = itemDetails
  const onDeleteTodo = () => {
    deleteItem(id)
  }
  const [isEdit, setIsEdit] = useState(false)
  const [isChecked, setCheck] = useState(false)
  const [taskTitle, setTaskTitle] = useState(title)

  const onClickEdit = () => {
    setIsEdit(true)
  }
  const onSaveEditTask = () => {
    setIsEdit(false)
    onEditedTask(id, taskTitle)
  }
  const onChangeTitle = event => {
    setTaskTitle(event.target.value)
  }
  const onClickCheckInput = event => {
    setCheck(event.target.checked)
  }

  const isCheckedTrue = isChecked ? 'checked' : ''

  return (
    <li>
      {isEdit ? (
        <div className="cont">
          <input
            className="edit-input"
            type="text"
            value={taskTitle}
            onChange={onChangeTitle}
          />
          <div>
            <button className="save-butn" onClick={onSaveEditTask}>
              Save
            </button>
            <button onClick={onDeleteTodo} className="delete-btn">
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className="cont">
          <div className="check-cont">
            <input
              className="checkbox"
              checked={isChecked}
              onChange={onClickCheckInput}
              type="checkbox"
              id={id}
            />
            <p htmlFor={id} className={`name ${isCheckedTrue}`}>
              {title}
            </p>
          </div>
          <div>
            <button className="save-butn" onClick={onClickEdit}>
              Edit
            </button>
            <button onClick={onDeleteTodo} className="delete-btn">
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  )
}

export default TodoItem
