import style from './dialog.module.css'

const Dialog =() => {


    return (
        <div className={style.dialog_container}>
            
            

            <div className={style.name}>KASKDKSDAS</div>
            <div className={style.message}>сообщения</div>

            <div className={style.name}>имена</div>
            <div className={style.message}>сообщения</div>

            <div className={style.name}>имена</div>
            <div className={style.message}>сообщения</div>
        </div>
    )
}
export { Dialog }