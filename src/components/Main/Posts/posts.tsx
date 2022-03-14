import { Post } from "./post/post"

import style from './posts.module.css'
import {useSelector} from "react-redux";
import {rootReducerType} from "../../../state/store-redux";
import {postType} from "../../../reducers/post_reducer";


const Posts =() => {

    let posts = useSelector<rootReducerType , postType[]>((state) => state.postReducer.posts)


    return (
        <div className={style.posts_wrapper}>
            {posts.map((el: postType) => {
               return <Post key={el.id} text={el.message} id={el.id}/>
            })}
        </div>
    )
}
export { Posts }