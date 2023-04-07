//,  发起请求, 获取数据
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners } from '@/views/discover/c-views/recommend/service/recommend'

// 在 createAsyncThunk 里面发起异步请求
export const fetchBannerDataAction = createAsyncThunk(
    'banners',
    async (arg, { getState }) => {
        const res = await getBanners()
        console.log('-> res:', res)
        return res.data
    }
)

// 定义请求接口的数据类型
interface IRecommendState {
    banners: any[]
}

const initialState: IRecommendState = {
    banners: [],
}

const recommendSlice = createSlice({
    name: 'recommend',
    initialState,
    reducers: {},
})

export default recommendSlice.reducer
