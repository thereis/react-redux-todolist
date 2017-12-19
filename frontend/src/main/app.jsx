import React, {Component} from 'react'
import ReactDOM           from 'react-dom'

import 'modules/bootstrap/dist/css/bootstrap.css'
import 'modules/font-awesome/css/font-awesome.css'
import '../template/custom.css'

import Menu   from '../template/menu'
import Routes from './routes'

export default props => (
    <div className={'container'}>
        <Menu/>
        <Routes/>
    </div>
)
