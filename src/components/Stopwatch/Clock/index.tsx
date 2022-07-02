import style from "./Clock.module.scss"

function Clock() {
    return (
        <>
            <span className={style.number}>0</span>
            <span className={style.number}>0</span>
            <span className={style.divider}>:</span>
            <span className={style.number}>0</span>
            <span className={style.number}>0</span>
        </>
    )
}

export default Clock
