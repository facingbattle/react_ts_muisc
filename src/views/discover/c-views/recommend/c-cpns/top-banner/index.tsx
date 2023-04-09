import React, { memo, useRef, ElementRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqualApp, useAppSelector } from '@/store'

import { BannerWrapper, BannerControl, BannerLeft, BannerRight } from './style'
import { Carousel } from 'antd'
import classNames from 'classnames'

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
    // 为了让 dots 的切换前先白一下, 需要在切换前将 currentIndex 设置为 -1
    const handleBeforeChange = (form: number, to: number) => {
        setCurrentIndex(-1)
    }

    // 动态获取背景图片
    let bgImageUrl
    if (currentIndex >= 0 && banners.length > 0) {
        bgImageUrl = banners[currentIndex]?.imageUrl + '?imageView&blur=40x20'
    }

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
                        dots={false}
                        ref={bannerRef}
                        effect="fade"
                        afterChange={handleAfterChange}
                        beforeChange={handleBeforeChange}
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
                    <div className="dots">
                        {banners.map((item, index) => {
                            return (
                                <li key={item.imageUrl}>
                                    <span
                                        className={classNames('item', {
                                            active: currentIndex === index,
                                        })}
                                    ></span>
                                </li>
                            )
                        })}
                    </div>
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
