import React, { ElementRef, memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumWrapper } from '@/views/discover/c-views/recommend/c-cpns/new-album/style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { Carousel } from 'antd'

interface IProps {
    children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
    // 定义内部数据
    const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

    // 事件处理函数
    const handlePrevClick = () => {
        bannerRef.current?.prev()
    }
    const handleNextClick = () => {
        bannerRef.current?.next()
    }

    return (
        <AlbumWrapper>
            <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
            {/* 轮播图 */}
            <div className="content">
                <button
                    className="sprite_02 arrow arrow-left"
                    onClick={handlePrevClick}
                ></button>
                <div className="banner">
                    <Carousel ref={bannerRef} dots={false} speed={1500}>
                        {[0, 1].map((item, index) => {
                            return <h1 key={index}>{item}</h1>
                        })}
                    </Carousel>
                </div>
                <button
                    className="sprite_02 arrow arrow-right"
                    onClick={handleNextClick}
                ></button>
            </div>
        </AlbumWrapper>
    )
}

export default memo(NewAlbum)
