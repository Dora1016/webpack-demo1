import './style.css'
import './style2.scss'
import './style3.less'
import './style4.styl'

const app = document.getElementById('app')
app.innerHTML = `<img src="${png}"style="width:100%;height:90vh" >`

import png from './assets/girl.jpg'

// 当点击按钮时，我再去加载某个js
const button = document.createElement('button')
button.innerText = '懒加载  在控制台打印lazy.js内容'
button.onclick = ()=>{
    const promise = import('./lazy') // 拿到的是一个延迟对象，promise,可以来监听成功失败
    promise.then((module)=>{
        const fn = module.default
        fn()
    },()=>{})
}
app.appendChild(button)
// 懒加载：用import()去加载这个文件，然后我会得到一个promise,promise.then前面写成功做什么，后面写失败做什么