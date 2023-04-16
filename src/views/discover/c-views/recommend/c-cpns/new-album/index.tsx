import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumWrapper } from '@/views/discover/c-views/recommend/c-cpns/new-album/style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { Carousel } from 'antd'

interface IProps {
    children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
    return (
        <AlbumWrapper>
            <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
            {/* 轮播图 */}
            <div className="content">
                <button className="sprite_02 arrow arrow-left"></button>
                <div className="banner"></div>
                <button className="sprite_02 arrow arrow-right"></button>
            </div>
        </AlbumWrapper>
    )
}

export default memo(NewAlbum)
