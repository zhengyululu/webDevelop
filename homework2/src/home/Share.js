import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import ContentGood from '../Router/ContentGood'
import {Link,Route} from 'react-router-dom';
import ContentShare from '../Router/ContentShare';

export default class Good extends Component {
    render() {
        return (
            <div>
                <Route path='/home/share/content/:id' component={ContentShare}/>
                <div className='out'> 
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                        <div key={item} className='page'>
                            <NavLink activeStyle={
                                {background:'gray',
                                color:'#fff'}
                                } to={'/home/share/content/'+item}>{item}</NavLink>
                        </div>
                    ))
                }
        </div>
                
            </div>
            
            
        )
    }
}
