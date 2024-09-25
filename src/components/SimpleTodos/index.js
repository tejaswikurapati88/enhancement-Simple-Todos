import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todoList: initialTodosList, inpu: ''}

  componentDidMount() {
    let todolocallist = []
    const stringifiedTodoList = localStorage.getItem('todolocallist')
    const parsedTodoList = JSON.parse(stringifiedTodoList)
    if (parsedTodoList === null) {
      todolocallist = []
    } else {
      todolocallist = parsedTodoList
    }
    this.setState({todoList: todolocallist})
    console.log(parsedTodoList)
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
    const {inpu, todoList} = this.state
    todoList.push({id: uuidv4(), title: inpu})
    this.setState({todoList, inpu: ''})
  }

  saveItems = () => {
    const {todoList} = this.state

    localStorage.setItem('todolocallist', JSON.stringify(todoList))
    console.log(todoList)
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
          {todoList.map(eachTodo => (
            <TodoItem
              itemDetails={eachTodo}
              deleteItem={this.deleteItem}
              key={eachTodo.id}
              onEditedTask={this.changeEditedValue}
            />
          ))}
          <button className="main-save-button" onClick={this.saveItems}>
            Save
          </button>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
