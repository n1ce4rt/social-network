import style from './header.module.css'
import {Login} from "../login/login";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {rootReducerType} from "../../state/store-redux";

const Header = () => {

    useEffect(()=> {
        console.log('Хедер отрисовалась')
    },[])

    const auth = useSelector<rootReducerType, string | null>(state => state.authReducer.login)
    return (
        <header className={style.header_wrapper}>
            <div className={style.hidden}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'  alt='logo'></img>
            </div>
            {
                auth? <div className={style.auth_name}>{auth}</div> : <Login />
            }
        </header>
    )
}
export { Header };