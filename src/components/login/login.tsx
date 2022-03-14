import style from './login.module.css'
import {LoginModal} from "./loginModal";
import {useSelector} from "react-redux";
import {rootReducerType} from "../../state/store-redux";


const Login =() => {

    const isAuth = useSelector<rootReducerType>(state => state.authReducer.isAuth)

    return isAuth?
        <div className={style.login_wrapper}>
            <button className={style.login_btn}>Login</button>
        </div> :
        <LoginModal />

}

export { Login }

