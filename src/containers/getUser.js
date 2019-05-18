import { connect } from "react-redux";
import { get_userInfo } from "../actions/index";
import UserInfo from "../components/about/user";

function mapStateToProps(state) {
    console.log(state, "user state")
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserInfo: () => dispatch(get_userInfo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);