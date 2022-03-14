import style from './loginModal.module.css'
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {authMeTC} from "../../reducers/auth_reducer";



const LoginModal =() => {

    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useDispatch()


    const authHandler =(e: any)=> {
        e.preventDefault()
        dispatch(authMeTC())
    }

    return (
        <div className={style.login_overlay}>

            <form action='' method='' className={style.login_form}>
                <div className={style.login_header}>
                    <h1 className={style.login_title}>LOGIN</h1>
                    <button className={style.close}>X</button>
                </div>
                <input type='text' name='' value={login} onChange={(e:any) => setLogin(e.target.value)}></input>
                <input type='password' name='' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <div className={style.checkbox}>
                    <input type={'checkbox'} value={'remember me'}/>Remember Me
                </div>
                <input type='submit' value='Sign in' onClick={(e: any)=> authHandler(e)}></input>

            </form>
        </div>
    )
}

export { LoginModal }
