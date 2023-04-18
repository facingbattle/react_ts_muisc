// , 推荐页面
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import {
    fetchRecommendDataAction,
    // fetchBannerDataAction,
    // fetchHotRecommendAction,
    // fetchNewAlbumAction,
} from '@/views/discover/c-views/recommend/store/recommend'

import TopBanner from '@/views/discover/c-views/recommend/c-cpns/top-banner'
import { RecommendWrapper } from '@/views/discover/c-views/recommend/style'
import HotRecommend from '@/views/discover/c-views/recommend/c-cpns/hot-recommend'
import NewAlbum from '@/views/discover/c-views/recommend/c-cpns/new-album'

interface IProps {
    children?: ReactNode
}

const Recommend: FC<IProps> = () => {
    // 发起 action 获取数据
    const dispatch = useAppDispatch()
    useEffect(() => {
        // dispatch(fetchBannerDataAction())
        // dispatch(fetchHotRecommendAction())
        // dispatch(fetchNewAlbumAction())
        dispatch(fetchRecommendDataAction())
    })

    return (
        <RecommendWrapper>
            <TopBanner></TopBanner>
            <div className="content wrap-v2">
                <div className="left">
                    {/* 热门推荐 */}
                    <HotRecommend />
                    {/* 新碟上架 */}
                    <NewAlbum />
                </div>
                <div className="right">right</div>
            </div>
        </RecommendWrapper>
    )
}

export default memo(Recommend)
