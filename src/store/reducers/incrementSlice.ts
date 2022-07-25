import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}


export const incrementSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        }
    },
})

//экспорт экшенов 
export const { increment, decrement } = incrementSlice.actions

//reducer
export default incrementSlice.reducer
