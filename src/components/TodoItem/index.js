// Write your code here
import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  render() {
    const {itemDetails, deleteItem} = this.props
    const {title, id} = itemDetails
    const onDelete = () => {
      deleteItem(id)
    }
    return (
      <li>
        <div className="cont">
          <p className="name">{title}</p>
          <button type="button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem
