// , 下载页
import React, { memo } from 'react'
// 当成类型来用的导入使用 type 导入
import type { FC, ReactNode } from 'react'

interface IProps {
    // 最新版本的 react 要自定义 children 为  ReactNode 类型
    children?: ReactNode
}

// FC 是对 Download 做约束的
// FC<IProps> 这个 IProps 是对 props 函数组件的参数做类型约束
// FC 就是 React.FunctionComponent 的类型别名
const Download: FC<IProps> = () => {
    return <div>Download</div>
}

// 使用 memo 包裹组件，可以减少不必要的渲染
export default memo(Download)
