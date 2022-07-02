import React from "react";
import Index from "./Item";
import { ITask } from "../../types/task";

import style from "./List.module.scss";

interface Props {
    taskList: ITask[]
    selectTask: (task: ITask) => void
}

function List({ taskList, selectTask }: Props) {
    return (
        <aside className={style.taskList}>
            <h2>Today's studies</h2>
            <ul>
                {taskList.map(task => (
                    <Index key={task.id} {...task} selectTask={selectTask} />
                ))}
            </ul>
        </aside>
    );
}

export default List;
