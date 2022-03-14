import {useState} from "react";
import style from './new_post.module.css'
import {useDispatch} from "react-redux";
import {setStatusAC} from "../../../reducers/app_reducer";

import BasicTextFields from "./BasicTextFields";
import ColorButtons from "../../iconLabelButtons/iconLabelButtons";
import {createNewPostAC} from "../../../reducers/post_reducer";
import {v1} from 'uuid'

const New_post =() => {

    const dispatch = useDispatch()

    const [text, setText] = useState<string>('')

    const onClickHandler =() => {
        dispatch(setStatusAC('loading'))
        dispatch(createNewPostAC( text, v1() ))
        dispatch(setStatusAC('nice'))

    }

    return (
        <div className={style.new_post_wrapper}>
            <BasicTextFields text={text}  setText={setText}/>
            <ColorButtons onClick={onClickHandler} setText={setText}/>
        </div>
    )
}
export { New_post }