import style from './main.module.css'
import { New_post } from './new_post/new_post'
import { Posts } from './Posts/posts'
import { Title } from './title/title'

export type PropsType = {
    updateStatus: (status: string) => void
    profileStatus: string

}
const Main = ({updateStatus, profileStatus}: PropsType) => {


    return (
        <main className={style.main_wrapper}>
            <Title
                profileStatus={profileStatus}
                updateStatus={updateStatus}
            />
            <New_post />
            <Posts />
        </main>
    )
}
export { Main }