import React, { ElementRef, memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumWrapper } from '@/views/discover/c-views/recommend/c-cpns/new-album/style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { Carousel } from 'antd'
import { useAppSelector } from '@/store'

interface IProps {
    children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
    // , 定义内部数据
    const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

    // , 从 redux 中获取数据
    const { newAlbums = [] } = useAppSelector((state) => {
        return {
            newAlbums: state.recommend.newAlbums,
        }
    })

    // , 事件处理函数
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
                            return (
                                <div className="album-list" key={item}>
                                    {newAlbums
                                        .slice(item * 5, (item + 1) * 5)
                                        .map((album) => {
                                            return (
                                                <div key={album.name}>
                                                    {album.name}
                                                </div>
                                            )
                                        })}
                                </div>
                            )
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
