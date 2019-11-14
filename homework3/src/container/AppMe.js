import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';
export default class AppMe extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white',height:'80px'}}
                    rightContent={[
                        <i style={{fontSize:22}} className='iconfont icon-shezhi' key='shezhi'></i>

                    ]}
                    >我的</NavBar>
            </div>
        )
    }
}