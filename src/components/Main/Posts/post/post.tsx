import style from './post.module.css'
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../../../state/store-redux";
import {deletePostAC} from "../../../../reducers/post_reducer";
type propsType = {
    text: string
    id: string
}
export const Post =({text,id}: propsType) => {

    const posts = useSelector<rootReducerType>(state => state.postReducer.posts)
    const dispatch = useDispatch()


    const deletePostHandler = (id: string) => {
        dispatch(deletePostAC(id))

    }
    return (
        <div className={style.post_container}>
            <p className={style.post}>{text}</p>
            <button type={"button"} className={style.post_btn} onClick={()=> deletePostHandler(id) }>X</button>
        </div>
    )
}