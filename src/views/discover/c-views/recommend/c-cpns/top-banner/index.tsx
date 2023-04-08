import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqualApp, useAppSelector } from '@/store'
import { Carousel } from 'antd'

import { BannerWrapper, BannerControl, BannerLeft, BannerRight } from './style'

interface IProps {
    children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
    // 从 store 中获取数据
    const { banners } = useAppSelector((state) => {
        return {
            banners: state.recommend.banners,
        }
    }, shallowEqualApp)

    return (
        <BannerWrapper>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel autoplay autoplaySpeed={1500}>
                        {banners.map((item) => {
                            return (
                                <div
                                    className="banner-item"
                                    key={item.imageUrl}
                                >
                                    <img
                                        src={item.imageUrl}
                                        alt={item.typeTitle}
                                    />
                                </div>
                            )
                        })}
                    </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className="btn left"></button>
                    <button className="btn right"></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
}

export default memo(TopBanner)
