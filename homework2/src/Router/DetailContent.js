import React, { Component } from 'react'

export default class DetailContent extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        let page = this.props.match.params.id;
        console.log(page);
        fetch('https://cnodejs.org/api/v1/topic/'+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                this.setState({
                    content: res.data.content,
                    title:res.data.title
                });
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res);
                    console.log(typeof(data));
                    
                    this.setState({
                        data: res.data
                    });
                    
                    
                })
        }
    }
    render() {
        return (
            <div>
                {   <div>
                    <h2>{this.state.title}</h2>
                    <div dangerouslySetInnerHTML={{__html:this.state.content}}></div>
                    </div>
                }
            </div>
        )
    }
}
