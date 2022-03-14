import React from "react";
import { Main } from "./main";
import {connect} from "react-redux";
import {rootReducerType} from "../../state/store-redux";
import {setStatusTC, updateStatusTC} from "../../reducers/post_reducer";


export type mainPropsType = mapStateToPropsType & mapDispatchToPropsType

export type mapDispatchToPropsType = {
    setStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void

}
export type mapStateToPropsType = {
    profileStatus: string
}
const mapStateToProps = (state: rootReducerType): mapStateToPropsType => {
   return  {
        profileStatus: state.postReducer.status as string
    }
}
class MainContainer extends React.Component<mainPropsType>  {

    componentDidMount() {
        console.log('Меин отрисовалась')
        this.props.setStatusTC(`21543`)
    }


    render() {
        return <Main
            updateStatus={this.props.updateStatusTC}
            profileStatus={this.props.profileStatus}

        />
    }
}

export const witchConnect = connect(mapStateToProps, {setStatusTC,updateStatusTC})(MainContainer)