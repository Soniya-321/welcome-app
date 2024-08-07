// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}
  
  subscribe = () => {
    this.setState((prevState) => ({
      text: prevState.text === "Subscribe" ? "Subscribed" : "Subscribe"
    }))
  }
  render() {
    const {text} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.subscribe}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
