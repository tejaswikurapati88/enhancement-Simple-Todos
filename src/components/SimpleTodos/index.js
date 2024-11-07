import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    status: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    status: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    status: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    status: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    status: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    status: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    status: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    status: false,
  },
]

class SimpleTodos extends Component {
  state = {todoList: initialTodosList, inpu: '', status: false}

  componentDidMount() {
    let todolocallist = []
    const stringifiedTodoList = localStorage.getItem('todolocallist')
    const parsedTodoList = JSON.parse(stringifiedTodoList)
    console.log(parsedTodoList)
    if (parsedTodoList === null) {
      todolocallist = []
    } else {
      todolocallist = parsedTodoList
    }
    this.setState({todoList: todolocallist})
  }

  deleteItem = id => {
    const {todoList} = this.state
    const filteredData = todoList.filter(each => each.id !== id)
    this.setState({todoList: filteredData})
  }

  onChangeInput = event => {
    this.setState({inpu: event.target.value})
  }

  onAddButton = () => {
    const {inpu, todoList, status} = this.state
    todoList.push({id: uuidv4(), title: inpu, status})
    this.setState({todoList, inpu: ''})
  }

  saveItems = () => {
    const {todoList} = this.state
    console.log(todoList)
    localStorage.setItem('todolocallist', JSON.stringify(todoList))
  }

  changeEditedValue = (id, taskTitle) => {
    const {todoList} = this.state
    const newUpdatedList = todoList.map(each => {
      if (each.id === id) {
        return {...each, title: taskTitle}
      }
      return each
    })
    this.setState({todoList: newUpdatedList})
  }

  onCheck = (val, id) => {
    const {todoList} = this.state
    const updatedList = todoList.map(each => {
      if (each.id === id) {
        return {...each, status: val}
      }
      return each
    })
    this.setState({todoList: updatedList})
  }

  render() {
    const {todoList, inpu} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="main-heading">Simple Todos</h1>
          <div className="add-cont">
            <input
              type="text"
              className="input"
              onChange={this.onChangeInput}
              value={inpu}
            />
            <button
              onClick={this.onAddButton}
              type="button"
              className="add-button"
            >
              Add
            </button>
          </div>
          <ul>
            {todoList.map(eachTodo => (
              <TodoItem
                itemDetails={eachTodo}
                deleteItem={this.deleteItem}
                key={eachTodo.id}
                onCheck={this.onCheck}
                onEditedTask={this.changeEditedValue}
              />
            ))}
          </ul>
          <button
            className="main-save-button"
            type="button"
            onClick={this.saveItems}
          >
            Save
          </button>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
