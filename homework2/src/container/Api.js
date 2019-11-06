import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../index.css'

export default class API extends Component {
    render() {
        let {url} = this.props.match
        // console.log(this.props)
        return (
            <div>
                <div className="home">
                    <Link to={`/home/all/content/1`}>主页</Link>
                    <span>/ API</span>
                </div>
                <div className="home2">
                    <h2>&nbsp;&nbsp;&nbsp;API</h2>
                </div>
                
            </div>
        )
    }
}