
import {profileType} from "../../reducers/users_reducer";
import LinearIndeterminate from "../linearIndeterminate/linearIndeterminate";
import style from './profile.module.css'
import {statusType} from "../../reducers/app_reducer";
import {useEffect} from "react";


type propsType = {
    status: statusType
    profile: profileType | null
    profileStatus?: string
}

export const Profile = ({status, profile, profileStatus}: propsType) => {

    useEffect(() => {
        console.log(profileStatus)
    },[])

    if (status === 'loading') {

        return (
            <div className={style.profile}>
                <LinearIndeterminate/>
            </div>
        )
    }

    return (


        <div className={style.profile}>
            {profile?.fullName}
            <img src={profile?.photos.large} alt={'some img'}/>
            <span>{profileStatus}</span>
        </div>
    )

}