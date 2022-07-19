import * as UserActionCreators from './user'
import * as DeviceActionCreators from "./device"
import * as CounterActionCreators from "./counter"

export default {
    ...UserActionCreators,
    ...DeviceActionCreators,
    ...CounterActionCreators
}