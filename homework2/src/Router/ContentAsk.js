import React from 'react';
import {Link} from 'react-router-dom';

// 无状态组件
export default class ContentAsk extends React.Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
//全部
    componentDidMount(){
        let page = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topics?tab=ask&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                this.setState({
                    data: res.data
                });
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?tab=ask&page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res)
                    this.setState({
                        data: res.data
                    });
                })
        }
    }
    render(){
        return (
            <div className="content">
                {
                    this.state.data.map((item)=>(
                        <div className="content1"  key={item.id}>
                            <img src={item.author.avatar_url}/>
                            &nbsp;&nbsp;&nbsp;
                            <span>{item.reply_count}/{item.visit_count}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button>分享</button>
                            &nbsp;&nbsp;&nbsp;
                            <Link to={`/detail/`+item.id}>{item.title}</Link>
                            <img src={item.author.avatar_url} className='image'/>
                            <span className='time'>8分钟</span>
                            {/* <h2>{item.title}</h2>
                            <div dangerouslySetInnerHTML={{__html:item.content}}></div> */}
                        </div>
                    ))
                }
            </div>
        )
    }
}