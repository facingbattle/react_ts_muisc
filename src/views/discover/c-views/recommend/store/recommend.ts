//,  发起请求, 获取数据
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    getBanners,
    getHotRecommend,
    getNewAlbum,
    getPlaylistDetail,
} from '@/views/discover/c-views/recommend/service/recommend'

// 如果不同的 action 要传递不同的参数, 就不建议把请求放到一个函数里处理了
// 分开的话可以更方便的传递 action 的参数
// 这里统一放到一个函数里处理, 使用 Promise 异步的方式发送三个请求, 而且这三个请求可以说是独立的, 而且没什么额外的请求参数
export const fetchRecommendDataAction = createAsyncThunk(
    'fetchData',
    (_, { dispatch }) => {
        // 这里面不使用 await 的方式
        // 使用 Promise 的方式发送异步请求, 避免使用 await 造成阻塞
        getBanners().then((res) => {
            dispatch(changeBannersAction(res.banners))
        })
        getHotRecommend(8).then((res) => {
            dispatch(changeHotRecommendsAction(res.result))
        })
        getNewAlbum().then((res) => {
            dispatch(changeNewAlbumsAction(res.albums))
        })
    }
)

// 在 createAsyncThunk 里面发起异步请求
// export const fetchBannerDataAction = createAsyncThunk(
//     'banners',
//     async (arg, { getState, dispatch }) => {
//         const res = await getBanners()
//         // 拿到数据直接返回
//         // return res.banners
//         dispatch(changeBannersAction(res.banners))
//     }
// )
//
// export const fetchHotRecommendAction = createAsyncThunk(
//     'hotRecommend',
//     async (arg, { getState, dispatch }) => {
//         const res = await getHotRecommend(8)
//         dispatch(changeHotRecommendsAction(res.result))
//     }
// )
//
// export const fetchNewAlbumAction = createAsyncThunk(
//     'newAlbums',
//     async (arg, { getState, dispatch }) => {
//         const res = await getNewAlbum()
//         dispatch(changeNewAlbumsAction(res.albums))
//     }
// )

const rankingIds = [
    // 飙升榜
    19723756,
    // 新歌榜
    3779629,
    // 原创榜
    2884035,
]
export const fetchRankingDataAction = createAsyncThunk(
    'rankingData',
    (_, { dispatch }) => {
        // 获取绑定的数据, 这里的请求数据使用数组的方式组织一下
        // * 方式 1: 每个请求单独处理
        // for (const id of rankingIds) {
        //     getPlaylistDetail(id).then((res) => {
        //         // if-else
        //     })
        // }

        // * 方式 2: 将三个结果都拿到, 统一放到一个数组中管理
        // 先得到每个请求的 Pormise 对象, 然后使用 Promise.all() 方法
        const promises: Promise<any>[] = rankingIds.map((id) =>
            getPlaylistDetail(id)
        )
        // 保障 1: 获取的所有结果后, 进行 dispatch 操作
        // 保障 2: 获取到的结果一定要保证正确的顺序
        Promise.all(promises).then((res) => {
            const playlists = res.map((item) => item.playlist)
            dispatch(changeRankingAction(playlists))
        })
    }
)

// 定义请求接口的数据类型
interface IRecommendState {
    banners: any[]
    hotRecommends: any[]
    newAlbums: any[]
    ranking: any[]
}

const initialState: IRecommendState = {
    banners: [],
    hotRecommends: [],
    newAlbums: [],
    ranking: [],
}

const recommendSlice = createSlice({
    name: 'recommend',
    initialState,
    reducers: {
        // , 处理数据方式 2
        changeBannersAction(state, action) {
            state.banners = action.payload
        },
        changeHotRecommendsAction(state, action) {
            state.hotRecommends = action.payload
        },
        changeNewAlbumsAction(state, action) {
            state.newAlbums = action.payload
        },
        changeRankingAction(state, action) {
            state.ranking = action.payload
        },
    },

    // , 处理数据方式 1: redux 官方提供处理数据的方式 (麻烦)
    // extraReducers: (builder) => {
    //     // 这里是相当于有三种状态, pending, fulfilled, rejected
    //     builder
    //         // 当 fetchBannerDataAction 发起网络请求还没有结果的时候, 是处于 pending 状态
    //         .addCase(fetchBannerDataAction.pending, (state, action) => {
    //             console.log('fetchBannerDataAction pending')
    //         })
    //         .addCase(fetchBannerDataAction.fulfilled, (state, action) => {
    //             state.banners = action.payload
    //         })
    //         // 当 fetchBannerDataAction 发起网络请求失败的时候, 是处于 rejected 状态
    //         .addCase(fetchBannerDataAction.rejected, (state, action) => {
    //             console.log('fetchBannerDataAction rejected')
    //         })
    // },
})

// 导出 actions
export const {
    changeBannersAction,
    changeHotRecommendsAction,
    changeNewAlbumsAction,
    changeRankingAction,
} = recommendSlice.actions
export default recommendSlice.reducer
