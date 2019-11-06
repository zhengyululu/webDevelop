import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import '../index.css'
export default class Start extends Component {
    render() {
        let {url} = this.props.match
        return (
            <div>
                <div className="home">
                    <Link to={`/home/all/content/1`}>主页</Link>
                    <span>/ Node.js新手入门</span>
                </div>
                <div className="home2">
                    <h2>&nbsp;&nbsp;&nbsp;新手入门</h2>
                </div>
            </div>
        )
    }
}