import style from './users.module.css'
import PaginationOutlined from "./pagination/pagination";
import {usersType} from "../../reducers/users_reducer";
import LinearIndeterminate from "../linearIndeterminate/linearIndeterminate";
import {Link} from 'react-router-dom'
import {statusType} from "../../reducers/app_reducer";
import {useEffect} from "react";


type propsType = {
    users: Array<usersType>
    status: statusType
    page: number
    following: Array<number>
    followUserTC: (userId: number, page: number) => void
    unFollowUserTC: (userId: number, page: number) => void
}


export const Users = ({users, status, page, following, unFollowUserTC, followUserTC}: propsType) => {


    useEffect(() => {
        console.log('Юзеры отрисовались')
    }, [page])



    return (

        <div className={style.users_container}>

            {status === 'loading' && <LinearIndeterminate/>}

            <div className={style.page_btn_wrapper}>
                <PaginationOutlined status={status} page={page}/>
            </div>

            {users.map((user: usersType) => {

                return (

                    <div key={user.id} className={style.user_wrapper}>

                        <Link to={`/profile/${user.id}`}>
                            <img alt='avatar' className={style.avatar} src={user.photos.small}/>
                        </Link>
                        <div className={style.name}>{user.name}</div>

                        <button onClick={() => {
                            user.followed ? unFollowUserTC(user.id, page) : followUserTC(user.id, page)
                        }}
                                disabled={following.some(id => id === user.id)}
                                className={user.followed ? style.btn_followed : style.btn_unfollowed}>
                            {user.followed ? 'UnFollow' : 'Follow'}
                        </button>
                    </div>)
            })}
        </div>
    )
}