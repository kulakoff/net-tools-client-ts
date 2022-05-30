import { Dispatch } from "react";
import { API_URL } from "../../http";
import { getDevicePropsType } from "../../types/cpe";


export const getDevice = ({ type, value }: getDevicePropsType) => {
    console.log("getDevice");
    console.log("type > ", type)
    console.log("value > ", value)

}

export const setDevice = () => {
    console.log("setDevice")
}