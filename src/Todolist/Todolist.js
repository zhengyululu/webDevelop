import React, { Component } from 'react';
import Todoinput from './Todoinput';
import Todoing from './Todoing';
import './todo.css';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo:[],
            todo1:[]
        }
        console.log(this.state.todo);
    }
// 添加todolist
    addItem = (data)=>{
        this.setState({
            todo: [...this.state.todo,data]
        },()=>{
            localStorage.setItem("todo",JSON.stringify(this.state.todo));
        }
        )
        console.log(this.state.todo)
    }
// 删除正在进行的
    delItem = (idx)=>{
        // 1、不能直接改变或处理state，通过setState改变
        // 2、setState是异步执行
        this.setState((state,props)=>{
            let todo = [...state.todo];
            todo.splice(idx,1);
            return {
                todo:todo
            }
        },()=>{
            localStorage.setItem("todo",JSON.stringify(this.state.todo));
        })
    }
// 删除已完成的
    delItem1 = (idx)=>{
        // 1、不能直接改变或处理state，通过setState改变
        // 2、setState是异步执行
        this.setState((state,props)=>{
            let todo1=[...state.todo1];
            todo1.splice(idx,1);
            return {
                todo1:todo1
            }
        },()=>{
            localStorage.setItem("todo1",JSON.stringify(this.state.todo1));
        }
        )
        console.log(this.state.todo1)
    }
// 点击checkbox完成任务
    finItem =(idx)=>{
        this.setState(()=>{
                this.state.todo1.push(this.state.todo[idx]);
                this.delItem(idx);
        },()=>{
            localStorage.setItem("todo",JSON.stringify(this.state.todo));
            localStorage.setItem("todo1",JSON.stringify(this.state.todo1));
        }
        )
    }
// 点击checkbox到正在进行
    concelItem =(idx)=>{
        this.setState(()=>{
                this.state.todo.push(this.state.todo1[idx]);
                this.delItem1(idx);
        },()=>{
            localStorage.setItem("todo",JSON.stringify(this.state.todo));
            localStorage.setItem("todo1",JSON.stringify(this.state.todo1));
        }
        )
    }
// localStorage存储
    componentDidMount(){
        let todoR = JSON.parse(localStorage.getItem("todo"));
        let todoR1=JSON.parse(localStorage.getItem("todo1"));
        if(todoR && todoR1){
            this.setState(()=>{
                return{
                    todo:todoR,
                    todo1:todoR1
                }
            })
        }  
    }
    render() {
        return (
            <div>
                <Todoinput add={this.addItem}/>
                <Todoing del={this.delItem} del1={this.delItem1}
                 todo={this.state.todo} todo1={this.state.todo1}
                 fin={this.finItem} con={this.concelItem}/>
            </div>
        )
    }
}