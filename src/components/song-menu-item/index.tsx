import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MenuItemWrapper } from '@/components/song-menu-item/style'

interface IProps {
    children?: ReactNode
    itemData: any
}

const SongMenuItem: FC<IProps> = (props) => {
    const { itemData } = props

    return (
        <MenuItemWrapper>
            <div className="top">
                <img src={itemData.picUrl} alt="" />
                {/* 蒙版 */}
                <div className="cover sprite_cover">
                    <div className="info sprite_cover">
                        <span>
                            <i className="sprite_icon headset"></i>
                            <span className="count">{itemData.playCount}</span>
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
