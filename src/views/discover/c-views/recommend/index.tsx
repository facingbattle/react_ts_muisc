// , 推荐页面
import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import hyRequest from '@/service'

interface IProps {
    children?: ReactNode
}

// 定义接口返回的数据类型
// 拿到类型, 通过这个网站可以快速的把转为对应的 type
// https://transform.tools/json-to-typescript
export interface IBannerData {
    imageUrl: string
    targetId: number
    targetType: number
    titleColor: string
    typeTitle: string
    url: string
    exclusive: boolean
    scm: string
    bannerBizType: string
}

const Recommend: FC<IProps> = () => {
    // 传递泛型可以 any[]
    // 或者自己定义一种类型 IBannerData, 然后传递进去 <IBannerData[]>
    const [banners, setBanners] = useState<IBannerData[]>([])

    // 测试网络请求, 在 useEffect 发送请求, 防止页面重复渲染时, 多次发送网络请求
    useEffect(() => {
        hyRequest
            .get({
                url: '/banner',
            })
            .then((res) => {
                console.log('res', res)
                setBanners(res.banners)
            })
    }, [])

    return (
        <div>
            {banners.map((item: IBannerData, index) => {
                return (
                    <div key={item.targetId + index}>
                        <img src={item.imageUrl} alt="" />
                    </div>
                )
            })}
        </div>
    )
}

export default memo(Recommend)
