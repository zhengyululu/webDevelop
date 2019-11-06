import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

export default class Dev extends Component {
    render() {
        return (
            <div>
                Dev
                <div className='out'> 
            {
                [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                    <div key={item} className='page'>
                        <NavLink activeStyle={
                            {background:'red',
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
