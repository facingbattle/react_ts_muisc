import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'

interface IProps {
    children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
    // 从 state 中拿数据
    const { hotRecommends } = useAppSelector((state) => {
        return {
            hotRecommends: state.recommend.hotRecommends,
        }
    })

    return (
        <RecommendWrapper>
            <AreaHeaderV1
                title="热门推荐"
                keywords={['华语', '流行', '摇滚', '民谣', '电子']}
                moreLink="/discover/songs"
            />
            <div className="hot-recommend">
                {hotRecommends.map((item, index) => {
                    return (
                        <div className="item" key="item.name">
                            {item.name}
                        </div>
                    )
                })}
            </div>
        </RecommendWrapper>
    )
}

export default memo(HotRecommend)
