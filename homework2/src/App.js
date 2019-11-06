import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Login from './container/Login';
import DetailContent from './Router/DetailContent'

export default class App extends Component {
    render() {
        return (
            
            <Provider store={store}>
                <Router>
                    <div>
                        <Header/>
                    </div>
                    <div className='content'>
                        <div className="left">
                            {/* <Route path='/' component={Home}/> */}
                            <Route path='/home' component={Home}/>
                            {/* <Route path='/home' component={All}/> */}
                            <Route path='/start' component={Start}/>
                            <Route path='/api' component={Api}/>
                            <Route path='/about' component={About}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/detail/:id' component={DetailContent}/>

                            
                        </div>
                        <div className="right">
                            <div className="right1">
                                <p>CNode:Node.js专业中文社区</p>
                                <p></p>
                                <p>您可以登陆或注册，也可以</p>
                                <p style={{color:"blue"}}>通过GitHub登录</p>
                            </div>
                            <div className='right2'>
                                <p>无人回复的话题</p>
                                <p>一种支持插件式开发的命令行工具开发模式</p>
                                <p>使用Vue开发了一个WebOS请问缓存的内存</p>
                                <p>模型是什么呢Hackers周刊第十期（2019-11</p>
                                <p>-03）写了个在测试中，控制函数日志打印</p>
                                <p>的npm</p>
                            </div>
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}