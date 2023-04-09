// , 推荐页面
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction } from '@/views/discover/c-views/recommend/store/recommend'

import TopBanner from '@/views/discover/c-views/recommend/c-cpns/top-banner'
import { RecommendWrapper } from '@/views/discover/c-views/recommend/style'

interface IProps {
    children?: ReactNode
}

const Recommend: FC<IProps> = () => {
    // 发起 action 获取数据
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchBannerDataAction())
    })

    return (
        <RecommendWrapper>
            <TopBanner></TopBanner>
            <div className="content wrap-v2">
                <div className="left">left</div>
                <div className="right">right</div>
            </div>
        </RecommendWrapper>
    )
}

export default memo(Recommend)
