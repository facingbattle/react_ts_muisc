import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderV1Wrapper } from '@/components/area-header-v1/style'

interface IProps {
    children?: ReactNode
}

const AreaHeaderV1: FC<IProps> = () => {
    return (
        /* sprite_02 是在 common 中定义好的精灵图类名 */
        <HeaderV1Wrapper className="sprite_02">
            <div className="left">
                <h3 className="title">热门推荐</h3>
                {/* 关键字先写死, 完成样式, 后续再从外部传进来 */}
                <div className="keywords">
                    {['华语', '流行', '摇滚'].map((item, index) => {
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
                <a className="more" href="/">
                    更多
                </a>
                <i className="icon sprite_02"></i>
            </div>
        </HeaderV1Wrapper>
    )
}

export default memo(AreaHeaderV1)
