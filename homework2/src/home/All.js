import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import ContentAll from '../Router/ContentAll'
import {Route} from 'react-router-dom';

export default class All extends Component {
    render() {
        return (
            <div>
                <Route path='/home/all/content/:id' component={ContentAll}/>
                <div className='out'> 
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                        <div key={item} className='page'>
                            <NavLink activeStyle={
                                {background:'gray',
                                color:'#fff'}
                                } to={'/home/all/content/'+item}>{item}</NavLink>
                        </div>
                    ))
                }
        </div>
                
            </div>
            
            
        )
    }
}
