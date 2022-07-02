import React from "react";
import Button from "../Button";
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from "uuid";

import style from "./Form.module.scss";

class Form extends React.Component<{ setTaskList: React.Dispatch<React.SetStateAction<ITask[]>> }> {
    initialState = { name: "", time: "00:00:00" }
    state = this.initialState

    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        this.props.setTaskList(oldTaskList => [
            ...oldTaskList,
            { ...this.state, selected: false, complete: false, id: uuidv4() }
        ])
        this.setState(this.initialState)
    }

    render() {
        return (
            <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputGroup}>
                    <label htmlFor="task">
                        Add a new task:
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="What do you want to study?"
                        required
                        value={this.state.name}
                        onChange={event => this.setState({ ...this.state, name: event.target.value })}
                    />
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="time">
                        Time:
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="time"
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                        value={this.state.time}
                        onChange={event => this.setState({ ...this.state, time: event.target.value })}
                    />
                </div>
                <Button type="submit">Add</Button>
            </form>
        );
    }
}

export default Form;
