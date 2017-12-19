import React, {Component} from 'react'
import ReactDOM           from 'react-dom'

import PageHeader from '../template/pageHeader'

export default props => (
    <div>
        <PageHeader name={'Sobre'} small={'Nós'}/>

        <h2>Nossa história</h2>
        <p>Lorem ipsum dolor sit amet...</p>

        <h2>Visão</h2>
        <p>Lorem ipsum dolor sit amet...</p>
    </div>
)