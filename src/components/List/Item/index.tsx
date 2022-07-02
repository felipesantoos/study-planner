import React from "react";
import { ITask } from "../../../types/task";

import style from "../List.module.scss";

interface Props extends ITask {
    selectTask: (task: ITask) => void
}

function Index({ name, time, selected, complete, id, selectTask }: Props) {
    return (
        <li
            className={`${style.task} ${selected ? style.selectedTask : ""}`}
            onClick={() => {selectTask({ name, time, selected, complete, id })}}
        >
            <h3>{name}</h3>
            <span>{time}</span>
        </li>
    )
}

export default Index
