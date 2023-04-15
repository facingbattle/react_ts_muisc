//,  发起请求, 获取数据
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    getBanners,
    getHotRecommend,
} from '@/views/discover/c-views/recommend/service/recommend'

// 在 createAsyncThunk 里面发起异步请求
export const fetchBannerDataAction = createAsyncThunk(
    'banners',
    async (arg, { getState, dispatch }) => {
        const res = await getBanners()
        // 拿到数据直接返回
        // return res.banners
        dispatch(changeBannersAction(res.banners))
    }
)

export const fetchHotRecommendAction = createAsyncThunk(
    'hotRecommend',
    async (arg, { getState, dispatch }) => {
        const res = await getHotRecommend(8)
        dispatch(changeHotRecommendsAction(res.result))
    }
)

// 定义请求接口的数据类型
interface IRecommendState {
    banners: any[]
    hotRecommends: any[]
}

const initialState: IRecommendState = {
    banners: [],
    hotRecommends: [],
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
export const { changeBannersAction, changeHotRecommendsAction } =
    recommendSlice.actions
export default recommendSlice.reducer
