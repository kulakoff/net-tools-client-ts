import * as UserActionCreators from './user'
import * as DeviceActionCreators from "./device"

export default {
    ...UserActionCreators,
    ...DeviceActionCreators
}