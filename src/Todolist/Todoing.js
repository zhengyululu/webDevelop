import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './todo.css'
export default class Todoing extends Component {
    constructor(){
        super();
        this.state={
            todo:[],
            todo1:[]
        }
    }
// 删除正在进行
    delItem =(idx,e)=>{
        console.log(idx);
        this.props.del(idx);
    }
// 删除已完成
    delItem1 =(idx,e)=>{
        console.log(idx);
        this.props.del1(idx);
    }
// 上到下
    finItem = (idx)=>{
        this.props.fin(idx);
    }
// 下到上
    concelItem = (idx)=>{
        this.props.con(idx);
    }
    render() {
        var {todo} = this.props;
        console.log(this.props)
        var {todo1}=this.props;
        return (
            <div className="all">
                <div className="center">
                    <div className="doing">
                        <p>正在进行  {todo.length}</p>
                        {
                            todo.map((item,idx) =>{
                                return( 
                                <li key={idx}>
                                    <div>
                                        <input type='checkbox'onChange={this.finItem.bind(this,idx)} checked={0}>
                                        </input> 
                                        {item}
                                        <button onClick={this.delItem.bind(this,idx)}>Del</button>
                                    </div>
                                </li>
                                )
                            })
                        }
                    </div>
                    <div className="finish">
                    <p>已完成  {todo1.length}</p>
                        {
                            todo1.map((item,idx) =>{
                                return( 
                                <li key={idx}>
                                    <div>
                                        <input type='checkbox'onChange={this.concelItem.bind(this,idx)} checked={1} style={{width:'22px',height:'22px'}}>
                                        </input>   {item}
                                        <button onClick={this.delItem1.bind(this,idx)}>Del</button>
                                    </div>
                                </li>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
Todoing.propTypes = {
    todo: PropTypes.array,
    del: PropTypes.func
}
Todoing.defaultProps = {
}