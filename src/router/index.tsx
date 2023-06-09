import React, { lazy } from 'react'
// 组件的 Navigate
import { Navigate } from 'react-router-dom'
// 引入路由的类型
import type { RouteObject } from 'react-router-dom'

// import Discover from '@/views/discover'
// import Mine from '@/views/mine'
// import Focus from '@/views/focus'
// import Download from '@/views/download'

// 懒加载路由组件
// 一级路由
const Discover = lazy(() => import('@/views/discover'))
const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))

// Discover 二级路由
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const Songs = lazy(() => import('@/views/discover/c-views/songs'))
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'))
const Artist = lazy(() => import('@/views/discover/c-views/artist'))
const Album = lazy(() => import('@/views/discover/c-views/album'))

const routes: RouteObject[] = [
    /*
    {
        path: '/',
        element: 组件对象,
    },
    */
    {
        path: '/',
        // 重定向
        element: <Navigate to="/discover" />,
    },
    {
        path: '/discover',
        element: <Discover />,
        children: [
            {
                path: '/discover',
                element: <Navigate to="/discover/recommend" />,
            },
            {
                path: '/discover/recommend',
                element: <Recommend />,
            },
            {
                path: '/discover/ranking',
                element: <Ranking />,
            },
            {
                path: '/discover/songs',
                element: <Songs />,
            },
            {
                path: '/discover/djradio',
                element: <Djradio />,
            },
            {
                path: '/discover/artist',
                element: <Artist />,
            },
            {
                path: '/discover/album',
                element: <Album />,
            },
        ],
    },
    {
        path: '/mine',
        element: <Mine />,
    },
    {
        path: '/focus',
        element: <Focus />,
    },
    {
        path: '/download',
        element: <Download />,
    },
]

export default routes
