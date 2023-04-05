import React from 'react'
import ReactDOM from 'react-dom/client'

// hash 路由
import { HashRouter } from 'react-router-dom'

// redux store
import { Provider } from 'react-redux'

// 重置 css 样式
import 'normalize.css'
import '@/assets/css/index.less'
// styled-components
import { ThemeProvider } from 'styled-components'

import App from '@/App'
import store from '@/store'
import theme from '@/assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    // 使用 Provider 包裹提供 store
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            {/* 使用 HashRouter 包裹 App 组件 */}
            <HashRouter>
                <App />
            </HashRouter>
        </ThemeProvider>
    </Provider>
)
