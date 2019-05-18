import { combineReducers } from "redux";
import { PAY_INCREASE, PAY_DECREASE, fetch_userInfo } from "../actions/index";
import { FETCH_USERINDFO_SUCCESS } from "../constants";

//发起action时store会自动调用reducer，并带有两个参数，state,action：当前的state和收到的action
//reducer通过计算返回新的state

const tiger = 10000;

const count = (state = tiger, action) => {
    console.log(action, "the reducer by count", state)
    switch (action.type) {
        case PAY_INCREASE.type:
            return state += 100;
        case PAY_DECREASE.type:
            return state -= 100;
        default:
            return state;
    }
}

const user = (state = {}, action = {}) => {
    console.log(action, "the reducer by user", state)
    switch(action.type) {
        case FETCH_USERINDFO_SUCCESS:
            return action.user;
        default:
            return state;
    }
}
//将多个reducer纯函数连接起来
const reducer = combineReducers({
    count, 
    user
})

export default reducer;