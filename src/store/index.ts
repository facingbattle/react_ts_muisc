import { configureStore } from '@reduxjs/toolkit'
import {
    useSelector,
    useDispatch,
    TypedUseSelectorHook,
    shallowEqual,
} from 'react-redux'

import counterReducer from './modules/counter'

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

// 目标: 拿到 store.getState 这个函数的返回值类型
//  1. 先拿到 store.getState 这个函数的类型, 使用 typeof
type GetStateFnType = typeof store.getState
//  2. 再拿到 store.getState 这个函数的返回值类型, 使用 ReturnType 这个内置类型工具
type IRootState = ReturnType<GetStateFnType>

// 另外一种拿 store.getState 的返回值类型的方式
// const state = store.getState()
// type StateType = typeof state

// 拿到 store.dispatch 这个函数的类型
type DispatchType = typeof store.dispatch

// , useAppSelector 的 hook
// ! 最重要的就是这个 useAppSelector 的抽取,  useAppDispatch 和 shallowEqualApp 抽不抽取都无所谓
// TypedUseSelectorHook 是一个泛型, 泛型的类型是 IRootState
// TypedUseSelectorHook<IRootState> 这个是一个函数的调用签名
// 这个 IRootState 是我们自定义的类型, 用来约束 store.getState 的返回值类型
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store
