import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/reducer";

//使用creatStore创建一个store
const store = createStore(
    reducer,  //必须是一个纯函数
    applyMiddleware(thunk)  //中间件，用来进行异步操作，必须放到applyMiddleware中，引入中间件有顺序要求 thunk,promise,logger
);
console.log(store.getState(), "get all state-------")
export default store;