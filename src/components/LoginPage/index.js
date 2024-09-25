import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class LoginPage extends Component {
  state = {inpuName: '', inpPassword: ''}

  onLogin = eve => {
    eve.preventDefault()
  }

  oninpName = event => {
    this.setState({inpuName: event.target.value})
  }

  oninpPass = event => {
    this.setState({inpPassword: event.target.value})
  }

  render() {
    const {inpuName, inpPassword} = this.state
    return (
      <div className="login-bg-container">
        <div className="login-cont">
          <div className="login-cont-head">
            <h1 className="login-heading">Login</h1>
          </div>
          <form className="form-cont" onSubmit={this.onLogin}>
            <div className="inpu-cont">
              <label htmlFor="nameInput">Name</label>
              <input
                id="nameInput"
                value={inpuName}
                className="logininpuname"
                onChange={this.oninpName}
                placeholder="Full Name"
              />
            </div>
            <div className="inpu-cont">
              <label htmlFor="namePass">Password</label>
              <input
                id="namePass"
                value={inpPassword}
                className="logininpuname"
                onChange={this.oninpPass}
                placeholder="Password"
              />
            </div>
            <Link to="/">
              <button className="sub-button" type="submit">
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage
