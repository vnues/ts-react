// import {React,Component} from "react"
import * as React from 'react'
import { Button } from 'antd'
import { ComponentExt } from '@utils/reactExt'

//import 'antd/lib/button/style/index.less'
// import { hot } from 'react-hot-loader'

class Test extends ComponentExt {
    render() {
        return (
            <div>
                test
                <Button type="primary" onClick={this.handleClick.bind(this)}>
                    11fsdf
                </Button>
            </div>
        )
    }
    handleClick() {
        this.$message.success('hello ts-react')
    }
    //handleClick=()=>{
    //this.$message.success('hello ts-react')写成箭头函数可以不用绑定this
    //因为的箭头函数的this是指向这个组件的
    //默认绑定外层this
    //}
}
export default Test
// const obj = {
//     name: 'Jerry',
//     greet: function() {
//         console.log(this.name)
//     }
// }
//class的定义属性写法的区别

//谁调用它 的意思通常这个谁就是指a.b a

//泛xing
