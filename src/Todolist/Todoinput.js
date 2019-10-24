import React, { Component } from 'react'
import './todo.css'
export default class Todoinput extends Component {
    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
        this.setState={
            todo:[],
            todo1:[]
        }
    }
    handleInput = (e)=>{
        // 绑定this，事件处理函数写成箭头函数，或者用bind
        if(e.keyCode === 13){
            this.props.add(e.target.value);
            e.target.value='';
        }
    }
    render() {
        return (
            <div className='top'>
                <div className='tcenter'>
                    <label htmlFor="inp">ToDoList </label>
                    <input id="inp" name="a" onKeyDown={this.handleInput} 
                    type="text" placeholder={'  添加Todo'}/>
                </div>
            </div>
            
        )
    }
}
// 受控组件：
// 1、给input标签添加value属性，赋值为state的值
// 2、给input标签绑定onChange事件，
// 在事件处理函数中setState
// 3、一个事件处理函数控制多个表单元素时，
// 给input标签加上name属性,事件处理函数中写：
// setState({[e.target.name]:e.target.value})