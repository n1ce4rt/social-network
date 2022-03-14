import style from './title.module.css'
import {ProfileStatus} from "../../status/profileStatus";

type propsType = {
    profileStatus: string
    updateStatus: (status: string) => void
}

const Title = ({profileStatus, updateStatus}: propsType) => {


    return (
        <>
            <img className={style.title} src='' alt='tyt kartinka'></img>
            <ProfileStatus profileStatus={profileStatus} updateStatus={updateStatus}/>
        </>

    )
}
export {Title}