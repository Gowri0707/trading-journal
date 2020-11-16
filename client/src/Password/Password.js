import React, { Component } from 'react'
import classes from "./Password.module.css"
export class Password extends Component {
    render() {
        return (
            <div className={classes.Password}>
                <p>username</p>
                <input type="password" placeholder="Password"></input>
            </div>
        )
    }
}

export default Password
