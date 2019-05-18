import { connect } from "react-redux";
import Main from "../components/main/index";
import { PAY_INCREASE, PAY_DECREASE, asyncExecute } from "../actions/index";

//需要渲染什么数据
function mapStateToProps(state) {
    return {
        count: state.count
    }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
    return {
        PayIncrease: (type) => dispatch(asyncExecute(type)),
        PayDecrease: () => dispatch(PAY_DECREASE)
    }
}
//连接组件
export default connect(mapStateToProps, mapDispatchToProps)(Main);