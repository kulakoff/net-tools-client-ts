import * as UserActionCreators from './user'
import * as DeviceActionCreators from "./device"
import * as CounterActionCreators from "./counter"
import * as IncrementActionCreators from "../reducers/incrementSlice"

export default {
    ...UserActionCreators,
    ...DeviceActionCreators,
    ...CounterActionCreators,
    ...IncrementActionCreators
}