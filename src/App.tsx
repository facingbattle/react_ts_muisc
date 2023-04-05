import React, { Suspense } from 'react'
// 引入路由
import { useRoutes, Link } from 'react-router-dom'
import routes from '@/router'

// store
// shallowEqual 防止重复渲染
import { shallowEqual } from 'react-redux'
import { useAppSelector, useAppDispatch } from '@/store'
import { changeMessageAction } from '@/store/modules/counter'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

function App() {
    const { count, message } = useAppSelector((state) => {
        return {
            count: state.counter.count,
            message: state.counter.message,
        }
    }, shallowEqual)

    const dispatch = useAppDispatch()
    // 事件处理函数
    const handleChangeMessage = () => {
        console.log('inner handleChangeMessage')
        dispatch(changeMessageAction('哈哈哈'))
    }

    // 使用路由
    return (
        <div className="App">
            {/* Link 导航 */}
            <AppHeader></AppHeader>
            {/* router 渲染的位置 */}
            {/* Suspense 包裹路由根组件, 防止 lazy 懒加载没有完成的时候, 页面报错 */}
            {/* fallback 可以是 组件、字符串文本、空字符串 */}
            <Suspense fallback="">
                <div>{useRoutes(routes)}</div>
            </Suspense>
            {/* footer */}
            <AppFooter></AppFooter>

            {/* redux 相关的使用 */}
            {/*<h2>当前计数: {count}</h2>*/}
            {/*<h2>当前消息: {message}</h2>*/}
            {/*<button onClick={() => handleChangeMessage()}>修改 message</button>*/}
        </div>
    )
}

export default App
