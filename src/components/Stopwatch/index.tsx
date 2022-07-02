import Clock from "./Clock";
import Button from "../Button";

import style from "./Stopwatch.module.scss";

function Stopwatch() {
    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Choose a card and start the stopwatch</p>
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <Button>Start</Button>
        </div>
    )
}

export default Stopwatch
