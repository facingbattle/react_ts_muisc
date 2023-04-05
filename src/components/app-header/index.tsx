import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'

// 引入处理后的数据
import headerTitles from '@/assets/data/header_titles.json'

interface IProps {
    children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
    // 定义组件内部的状态
    // 直接使用 useState 来定义状态是有一个问题的，就是每次页面刷新的时候，状态都会被重置
    // 导致选中的状态丢失
    // const [currentIndex, setCurrentIndex] = useState(0)

    // 渲染 nav 标题的展示逻辑
    const showItem = (item: any) => {
        const { title, type, link } = item

        if (type === 'path') {
            return (
                <NavLink to={link}>
                    {title}
                    <i className="icon sprite_01"></i>
                </NavLink>
            )
        }
        return (
            <a href={link} rel="noreferrer" target="_blank">
                {title}
            </a>
        )
    }

    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a className="logo sprite_01" href="/">
                        网易云音乐
                    </a>
                    <div className="title-list">
                        {headerTitles.map((item) => {
                            return (
                                <div className="item" key={item.title}>
                                    {showItem(item)}
                                </div>
                            )
                        })}
                    </div>
                </HeaderLeft>
                <HeaderRight>right</HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
}

export default memo(AppHeader)
