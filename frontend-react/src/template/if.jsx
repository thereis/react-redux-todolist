import React, {Component} from 'react'
import ReactDOM           from 'react-dom'

export default props => {
    if (props.test) return props.children
    return false
}