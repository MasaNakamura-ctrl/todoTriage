import { useState } from "react";
import "./triage.css";

export const Triage = () =>{
    const [immediateTasks, setImmediateTasks] = useState(["This is Task"]);
    const [delayedTasks, setDelayedTasks] = useState(["This is Task"]);
    const [minorTasks, setMinorTasks] = useState(["This is Task"]);
    const [rescheduleTasks, setRescheduleTasks] = useState(["This is Task"]);

    const handleAddTask = (task) => {
        setImmediateTasks([...immediateTasks, task]);
    }
    return(
        <>
            <div className="Title">
                <h1>ToDoTriage</h1>
            </div>
            <div className="input-area">
                <input placeholder="Input Tasks"></input>
                <button>Add</button>
            </div>
            <div className="task-area-container">
                <div className="task-area red-task">
                    <p>Immediate</p>
                    <ul>
                        {immediateTasks.map((immediate, index) => {
                            return(
                                <li key={index}>
                                    <div className="list-row">
                                        <p className="todo-item">{immediate}</p>
                                        <button>End</button>
                                        <button>Yellow</button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="task-area yellow-task">
                    <p>Delayed</p>
                    <ul>
                    {immediateTasks.map((minor, index) => {
                        return(
                            <li key={index}>
                                <div className="list-row">
                                    <p className="todo-item">{minor}</p>
                                    <button>End</button>
                                    <button>Green</button>
                                </div>                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="task-area green-task">
                    <p>Minor</p>
                    <ul>
                    {immediateTasks.map((delayed, index) => {
                            return(
                                <li key={index}>
                                    <div className="list-row">
                                        <p className="todo-item">{delayed}</p>
                                        <button>End</button>
                                        <button>Black</button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="task-area">
                    <p>Reschedule</p>
                    <ul>
                        {immediateTasks.map((reschedule, index) => {
                            return(
                                <li key={index}>
                                    <div className="list-row">
                                        <p className="todo-item">{reschedule}</p>
                                        <button>End</button>
                                        <button>Red</button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>

    );
}