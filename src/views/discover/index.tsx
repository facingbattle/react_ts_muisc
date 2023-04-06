// , 发现页
import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'

interface IProps {
    children?: ReactNode
}

const Discover: FC<IProps> = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            {/* 二级路由的 lazy loader 处理 */}
            <Suspense fallback="">
                <Outlet />
            </Suspense>
        </div>
    )
}

export default memo(Discover)
