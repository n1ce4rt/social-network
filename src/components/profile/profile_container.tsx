import React from "react";
import {Profile} from "./profile";
import {rootReducerType} from "../../state/store-redux";
import {getProfilerTC, profileType} from "../../reducers/users_reducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {statusType} from "../../reducers/app_reducer";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {setStatusTC } from "../../reducers/post_reducer";

export type profilePropsType = mapStateToPropsProfileType & mapDispatchToPropsProfileType
type PropsType = RouteComponentProps<PathParamsType> & profilePropsType
type PathParamsType = {
    userId: string
}
export type mapStateToPropsProfileType = {
    profile: profileType | null
    status: statusType
    isAuth: boolean
    profileStatus?: string
}
export type mapDispatchToPropsProfileType = {
    getProfilerTC: (userId: number) => void
    setStatusTC : (userId: string) => void
}
const mapStateToProps = (state: rootReducerType): mapStateToPropsProfileType => {
    return {
        profile: state.usersReducer.profile,
        status: state.appReducer.status,
        isAuth: state.authReducer.isAuth,
        profileStatus: state.postReducer.status
    }
}


export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        this.props.getProfilerTC(+this.props.match.params.userId)
        this.props.setStatusTC(this.props.match.params.userId)


    }

    render() {
        return <Profile
            profile={this.props.profile}
            status={this.props.status}
            profileStatus={this.props.profileStatus}
        />


    }
}

export const WithCompose = compose(
    withRouter,
    connect(mapStateToProps, {getProfilerTC, setStatusTC}) as any,
    withAuthRedirect)(ProfileContainer)