import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import ContentGood from '../Router/ContentGood'
import {Link,Route} from 'react-router-dom';
import ContentAll from '../Router/ContentAll';

export default class Good extends Component {
    render() {
        return (
            <div>
                <Route path='/home/good/content/:id' component={ContentGood}/>
                <div className='out'> 
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                        <div key={item} className='page'>
                            <NavLink activeStyle={
                                {background:'gray',
                                color:'#fff'}
                                } to={'/home/good/content/'+item}>{item}</NavLink>
                        </div>
                    ))
                }
        </div>
                
            </div>
            
            
        )
    }
}
