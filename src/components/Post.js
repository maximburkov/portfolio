import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.props.text}</div>
            </div>
        )
    }
}
