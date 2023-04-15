import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'

interface IProps {
    children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
    return <RecommendWrapper>HotRecommend</RecommendWrapper>
}

export default memo(HotRecommend)
