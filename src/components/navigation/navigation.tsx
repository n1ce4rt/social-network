import style from './navigation.module.css'
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";
import {rootReducerType} from "../../state/store-redux";
import {useEffect} from "react";

const Navigation = () => {
    const page = useSelector<rootReducerType>(state => state.usersReducer.currentPage)
    useEffect(() => {

    }, [page])

    return (
        <nav className={style.navigation_wrapper}>
            <div className='profile'><Link to='/main'>Profile</Link></div>

            <div className='users'><Link to={`/users/${page}`}>Users</Link></div>

            <div className='message'><Link to='/message'>Messages</Link></div>

            <div className='news'><Link to='/news'>News</Link></div>

            <div className='music'><Link to='/music'>Music</Link></div>

            <div className='settings'><Link to='/settings'>Settings</Link></div>

            <div className='test_login'><Link to='/test'>Test Login</Link></div>
        </nav>
    )
}
export {Navigation}