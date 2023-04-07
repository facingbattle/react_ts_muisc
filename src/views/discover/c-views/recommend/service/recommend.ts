// , 这个文件是用来存放请求数据的封装的 url
import hyRequest from '@/service'

// 获取轮播图
export function getBanners() {
    return hyRequest.get({
        url: '/banner',
    })
}
