import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqualApp, useAppSelector } from '@/store'

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
        <div>
            {banners.map((item) => {
                return <div key={item.imageUrl}>{item.imageUrl}</div>
            })}
        </div>
    )
}

export default memo(TopBanner)
