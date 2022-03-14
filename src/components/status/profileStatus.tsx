import React, {ChangeEvent} from "react";


export class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false,
        status: this.props.status
    }
    editModeActivate =() => {
        this.setState({editMode: true})
    }
    editModeDeActivate =() => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange =(e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if (prevProps.profileStatus !== this.props.profileStatus) {
            this.setState({
                status: this.props.profileStatus
            })
            console.log(prevProps.profileStatus)
            console.log('ok')
        }

    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={() => this.editModeActivate()}>{this.props.profileStatus}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                    <input onBlur={() => this.editModeDeActivate()} type={'text'} value={this.state.status} autoFocus={true} onChange={(e) => this.onStatusChange(e)}/>
                    </div>

                }
            </div>
        )
    }
}