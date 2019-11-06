import React from 'react';
import {connect} from 'react-redux';
// import {log} from '../actions';
import {Link} from 'react-router-dom';

function Login(props){
    function login(){
        fetch('https://cnodejs.org/api/v1/user/alsotang')
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
                let userInfor = {
                    loginname: res.data.loginname,
                    score: res.data.score
                }
                props.history.push('/home/all/content/1');
            })
    }
    return(
        <div>
            <div className="home">
                <Link to={`/home/all/content/1`}>主页</Link>
                <span>/ 登录</span>
            </div>
            <div className="login1">   
                <span>用户名 &nbsp;  </span><input type="text"/>
                <br/>
                <span>密码 &nbsp;  </span><input type="password"/>
                <br/>
                <button onClick={login}>登录</button>
            </div>
        </div>
    )
}
export default connect()(Login);