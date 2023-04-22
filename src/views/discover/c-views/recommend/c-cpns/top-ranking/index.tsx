import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingWrapper } from '@/views/discover/c-views/recommend/c-cpns/top-ranking/style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import TopRankingItem from '@/views/discover/c-views/recommend/c-cpns/top-ranking-item'

interface IProps {
    children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
    const { ranking } = useAppSelector((state) => ({
        ranking: state.recommend.ranking,
    }))

    return (
        <RankingWrapper>
            <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
            <div className="content">
                {ranking.map((item, index) => {
                    return (
                        // <div className="item" key={item.id}>
                        //     {item.name}
                        //
                        // </div>
                        <TopRankingItem itemData={item} key={item.id} />
                    )
                })}
            </div>
        </RankingWrapper>
    )
}

export default memo(TopRanking)
