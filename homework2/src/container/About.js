import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../index.css'

export default class About extends Component {
    render() {
        let {url} = this.props.match
        // console.log(this.props)
        return (
            <div>
                <div className="home">
                    <Link to={`/home/all/content/1`}>主页</Link>
                    <span>/ 关于</span>
                </div>
                <div className="home2">
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;关于</h2>
                </div>
                
            </div>
        )
    }
}