import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import {Route} from 'react-router-dom';
import ContentAsk from '../Router/ContentAsk';

export default class Good extends Component {
    render() {
        return (
            <div>
                <Route path='/home/ask/content/:id' component={ContentAsk}/>
                <div className='out'> 
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                        <div key={item} className='page'>
                            <NavLink activeStyle={
                                {background:'gray',
                                color:'#fff'}
                                } to={'/home/ask/content/'+item}>{item}</NavLink>
                        </div>
                    ))
                }
        </div>
                
            </div>
            
            
        )
    }
}
