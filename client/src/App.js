import React, { Component } from 'react'
import classes from "./App.module.css"
// import Password from './Password/Password'
export class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        
        <div className={classes.inside}>
          <input type="pwd" placeholder="Password"></input>
          <label>Password</label>
        </div>
      </div>
    )
  }
}

export default App
