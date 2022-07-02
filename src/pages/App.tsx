import React, {useEffect, useState} from "react";

import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import { ITask } from "../types/task";

import style from "./App.module.scss";

function App() {
    const [taskList, setTaskList] = useState<ITask[]>([]);
    const [selectedTask, setSelectedTask] = useState<ITask>();

    function selectTask(task: ITask) {
        setSelectedTask(task)
    }

    useEffect(() => {
        setTaskList(oldTaskList => oldTaskList.map(task => ({
            ...task,
            selected: task.id === selectedTask?.id
        })))
    }, [selectedTask])

    return (
        <div className={style.app}>
            <Form setTaskList={setTaskList} />
            <List taskList={taskList} selectTask={selectTask} />
            <Stopwatch />
        </div>
    );
}

export default App;
