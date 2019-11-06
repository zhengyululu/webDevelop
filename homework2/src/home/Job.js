import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import ContentGood from '../Router/ContentGood'
import {Link,Route} from 'react-router-dom';
import ContentJob from '../Router/ContentJob';

export default class Good extends Component {
    render() {
        return (
            <div>
                <Route path='/home/job/content/:id' component={ContentJob}/>
                <div className='out'> 
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                        <div key={item} className='page'>
                            <NavLink activeStyle={
                                {background:'gray',
                                color:'#fff'}
                                } to={'/home/job/content/'+item}>{item}</NavLink>
                        </div>
                    ))
                }
        </div>
                
            </div>
            
            
        )
    }
}
