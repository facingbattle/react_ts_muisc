import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MenuItemWrapper } from '@/components/song-menu-item/style'
import { formatCount, getImageSize } from '@/utils/format'

interface IProps {
    children?: ReactNode
    itemData: any
}

const SongMenuItem: FC<IProps> = (props) => {
    const { itemData } = props
    console.log('-> itemData:', itemData)

    return (
        <MenuItemWrapper>
            <div className="top">
                {/* 小图请求参数拼接 */}
                <img src={getImageSize(itemData.picUrl, 140)} alt="" />
                {/* 蒙版 */}
                <div className="cover sprite_cover">
                    <div className="info sprite_cover">
                        <span>
                            <i className="sprite_icon headset"></i>
                            <span className="count">
                                {formatCount(itemData.playCount)}
                            </span>
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="bottom">{itemData.name}</div>
        </MenuItemWrapper>
    )
}

export default memo(SongMenuItem)
