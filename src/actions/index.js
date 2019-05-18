import axios from "axios";
import { FETCH_USERINDFO_SUCCESS } from "../constants";

//action必须是一个带有type属性的对象

export const PAY_INCREASE = {
    type: "PayIncrease"
};

export const PAY_DECREASE = {
    type: "PayDecrease"
};

export const asyncExecute = (type) => {
    return (dispatch, getState) => {
        console.log(dispatch, getState(), "999999", type)
        setTimeout(function() {
            dispatch(PAY_INCREASE)
        }, 2000)
    }
}

export const get_userInfo = () => {
    return (dispatch, getState) => {
        axios.get("https://randomuser.me/api/")
            .then((res) => {
                console.log(res, "success")
                dispatch(fetch_userInfo(res.data.results[0]));
            })
            .catch(err => {
                console.log("err");
            })
    }
}

export const fetch_userInfo = (user) => {
    return {
        type: FETCH_USERINDFO_SUCCESS,
        user
    }
}