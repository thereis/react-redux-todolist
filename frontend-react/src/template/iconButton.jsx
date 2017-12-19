import React, {Component} from 'react'
import ReactDOM           from 'react-dom'
import If                 from '../template/if'

export default props => (
    <If test={!props.hide}>
        <button className={'btn btn-' + props.style}
                onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}/>
        </button>
    </If>
)
