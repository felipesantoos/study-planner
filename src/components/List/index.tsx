import React from "react";
import "./style.scss";

function List() {
    const tasks = [
        {name: "React", time: "02:00:00" },
        {name: "TypeScript", time: "01:00:00"},
        {name: "JavaScript", time: "00:30:00"}
    ];
    return (
        <aside className="taskList">
            <h2>Today's studies</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="task">
                        <h3>{task.name}</h3>
                        <span>{task.time}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default List;
