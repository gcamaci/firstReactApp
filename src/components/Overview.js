import React from "react";

const Overview = (props) => {
    const { tasks } = props

    return (
        <ul>
            {tasks.map((task) => {
                return <li key={task.taskId}>{`${task.taskId}: ${task.text}`}</li>;
            })}
        </ul>
    )
}
export {Overview}