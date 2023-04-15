import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { HeaderV1Wrapper } from '@/components/area-header-v1/style'

interface IProps {
    children?: ReactNode
    title?: string
    keywords?: string[]
    // 更多链接的文字
    moreText?: string
    // 更多链接的地址
    moreLink?: string
}

const AreaHeaderV1: FC<IProps> = (props: IProps) => {
    // 解构 props 同时设置参数的默认值
    const {
        title = '默认标题',
        keywords = [],
        moreText = '更多',
        moreLink = '/',
    } = props

    return (
        /* sprite_02 是在 common 中定义好的精灵图类名 */
        <HeaderV1Wrapper className="sprite_02">
            <div className="left">
                <h3 className="title">{title}</h3>
                {/* 关键字先写死, 完成样式, 后续再从外部传进来 */}
                <div className="keywords">
                    {keywords.map((item, index) => {
                        return (
                            <div className="item" key={item}>
                                <a href="/">{item}</a>
                                <span className="divider">|</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="right">
                <Link className="more" to={moreLink}>
                    {moreText}
                </Link>
                <i className="icon sprite_02"></i>
            </div>
        </HeaderV1Wrapper>
    )
}

export default memo(AreaHeaderV1)
