import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import All from '../home/All';
import Good from '../home/Good';
import Share from '../home/Share';
import Ask from '../home/Ask';
import Job from '../home/Job';
import '../index.css'

export default class Home extends Component {
    render() {
        let {url} = this.props.match
        return (
            <div>
                <div className="home">
                    <Link to={`/home/all/content/1`}>全部</Link>
                    <Link to={`/home/good/content/1`}>精华</Link>
                    <Link to={`/home/share/content/1`}>分享</Link>
                    <Link to={`/home/ask/content/1`}>问答</Link>
                    <Link to={`/home/job/content/1`}>招聘</Link>
                </div>
                <div className="home2">
                    <Route path='/home/all' component={All}/>
                    <Route path='/home/good' component={Good}/>
                    <Route path='/home/share' component={Share}/>
                    <Route path='/home/ask' component={Ask}/>
                    <Route path='/home/job' component={Job}/>                     
                </div>
            </div>
        )
    }
}