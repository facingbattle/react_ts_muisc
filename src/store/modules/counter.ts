import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// , 一些不方便类型推导出来的类型, 可以明确的定义类型
// initialState 定义类型
interface IState {
    count: number
    message: string
    address: string
    height: number
    direction: 'left' | 'right' | 'up' | 'down'
    names: string[]
}
// 把 initialState 的提取出来, 作为一个对象传入
const initialState: IState = {
    count: 100,
    message: 'Hello Redux',
    address: '广州市',
    height: 1.88,
    direction: 'left',
    names: [],
}

// 使用片段, 创建一个数据块
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // changeMessageAction(state, { payload }) {
        //     state.message = payload
        // },

        // , 这个 payload 也是可以明确的指定类型
        // 这个 { payload } 解构实际上就是一个 action
        // PayloadAction 这个类型是 @reduxjs/toolkit 提供的, 这个东西接受一个泛型, 用来指定 payload 的类型
        // 这里的 <string> 泛型就是用来指定 payload 的类型
        // 当然这里直接用 any 也是 ok 的
        // changeMessageAction(state, action: PayloadAction<string>) {
        //     state.message = action.payload
        // },

        // 这个写法当然也可以使用解构的方式
        changeMessageAction(state, { payload }: PayloadAction<string>) {
            state.message = payload
        },
    },
})

// action 函数
export const { changeMessageAction } = counterSlice.actions
// reducer 函数
export default counterSlice.reducer
