import {connect} from "react-redux";
import {
    usersType, getUsersTC, followUserTC, unFollowUserTC
} from "../../reducers/users_reducer";
import {rootReducerType} from "../../state/store-redux";
import React from "react";
import {Users} from "./users";
import {statusType} from "../../reducers/app_reducer";
import { withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    match: any
}
export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType & PathParamsType

export type mapStateToPropsType = {
    totalUserCount: number
    currentPage: number
    users: Array<usersType>
    appStatus: statusType
    followingInProgress: Array<number>
}

const mapStateToProps = (state: rootReducerType): mapStateToPropsType => {
    return {
        appStatus: state.appReducer.status,
        users: state.usersReducer.users,
        totalUserCount: state.usersReducer.totalUserCount,
        currentPage: state.usersReducer.currentPage,
        followingInProgress: state.usersReducer.followingInProgress,
    }
}

export type mapDispatchToPropsType = {
    getUsersTC: (page: number) => void
    followUserTC: (userId: number, page: number) => void
    unFollowUserTC: (userId: number, page: number) => void
}


class UsersContainer extends React.Component<usersPropsType> {

    componentDidMount() {
        console.log(this.props.match.params.page)
        this.props.getUsersTC(+this.props.match.params.page)
    }

    render() {
        return <Users users={this.props.users}
                      status={this.props.appStatus}
                      page={this.props.currentPage}
                      following={this.props.followingInProgress}
                      followUserTC={this.props.followUserTC}
                      unFollowUserTC={this.props.unFollowUserTC}
        />

    }
}
let WithAuthRedirectContainer = withAuthRedirect(UsersContainer)


export const WithUrlDataUsers = withRouter(connect(mapStateToProps, {getUsersTC,followUserTC,unFollowUserTC})(WithAuthRedirectContainer) as any);


// let WithCompose = compose(
//     withRouter,
//     connect(mapStateToProps, {getUsersTC,followUserTC,unFollowUserTC}) as any,
//     withAuthRedirect
// )(UsersContainer)

// export default WithCompose