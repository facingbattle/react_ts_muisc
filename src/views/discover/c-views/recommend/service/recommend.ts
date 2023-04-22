// , 这个文件是用来存放请求数据的封装的 url
import hyRequest from '@/service'

// 获取轮播图
export function getBanners() {
    return hyRequest.get({
        url: '/banner',
    })
}

// 获取推荐歌单
export function getHotRecommend(limit = 30) {
    return hyRequest.get({
        url: '/personalized',
        params: {
            limit,
        },
    })
}

// 获取 新碟上架 的轮播图数据
export function getNewAlbum() {
    return hyRequest.get({
        url: '/album/newest',
    })
}

// 获取榜单数据
export function getPlaylistDetail(id: number) {
    return hyRequest.get({
        url: '/playlist/detail',
        params: {
            id,
        },
    })
}
