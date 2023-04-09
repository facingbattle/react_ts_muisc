import React, { memo, useRef, ElementRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqualApp, useAppSelector } from '@/store'

import { BannerWrapper, BannerControl, BannerLeft, BannerRight } from './style'
import { Carousel } from 'antd'

interface IProps {
    children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
    // , 定义内部数据
    // 没有值的时候 useRef 初始化为 null
    const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
    // 轮播图当前张数记录
    const [currentIndex, setCurrentIndex] = useState(0)

    // 从 store 中获取数据
    const { banners } = useAppSelector((state) => {
        return {
            banners: state.recommend.banners,
        }
    }, shallowEqualApp)

    // , 事件处理函数
    const handlePrevClick = () => {
        bannerRef.current?.prev()
    }
    const handleNextClick = () => {
        bannerRef.current?.next()
    }
    // 轮播图切换后的回调
    const handleAfterChange = (current: number) => {
        setCurrentIndex(current)
    }

    // 动态获取背景图片
    const bgImageUrl = banners[currentIndex]?.imageUrl + '?imageView&blur=40x20'

    return (
        <BannerWrapper
            style={{
                background: `url('${bgImageUrl}') center center/6000px`,
            }}
        >
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel
                        autoplay
                        autoplaySpeed={1500}
                        ref={bannerRef}
                        effect="fade"
                        afterChange={handleAfterChange}
                    >
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
                    <button
                        className="btn left"
                        onClick={() => handlePrevClick()}
                    ></button>
                    <button
                        className="btn right"
                        onClick={() => handleNextClick()}
                    ></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
}

export default memo(TopBanner)
