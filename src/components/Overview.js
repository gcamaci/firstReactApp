import React from "react";

const Overview = (props) => {
    const { tasks, taskDelete } = props

    return (
        <ul>
            {tasks.map((task) => {
                return <li key={task.taskId}>
                    <p>{`${task.taskId}: ${task.text}`}</p>
                    <button type="button" id={task.taskId} onClick={taskDelete}>delete</button>
                    
                    </li>;
            })}
        </ul>
    )
}
export {Overview}