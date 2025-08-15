import { useState } from "react";
import "./triage.css";

export const Triage = () =>{
    const [immediateTasks, setImmediateTasks] = useState(["This is Task"]);
    const [delayedTasks, setDelayedTasks] = useState(["This is Task"]);
    const [minorTasks, setMinorTasks] = useState(["This is Task"]);
    const [rescheduleTasks, setRescheduleTasks] = useState(["This is Task"]);
    const [task, setTask] = useState("");
    const onChangeTodo = (event) => setTask(event.target.value);
    const onClickAdd = () => {
        setImmediateTasks([...immediateTasks, task]);
        setTask("");
    }
    const onClickEnd = (index, taskArray, setTaskArray) => {
        const newTasks = [...taskArray];
        newTasks.splice(index, 1);
        setTaskArray(newTasks);
    }
    return(
        <>
            <div className="Title">
                <h1>ToDoTriage</h1>
            </div>
            <div className="input-area">
                <input placeholder="Input Tasks" value={task} onChange={onChangeTodo}></input>
                <button onClick={onClickAdd}>Add</button>
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
                                        <button onClick={() => onClickEnd(index, immediateTasks, setImmediateTasks)}>End</button>
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
                        {delayedTasks.map((minor, index) => {
                            return(
                                <li key={index}>
                                    <div className="list-row">
                                        <p className="todo-item">{minor}</p>
                                        <button onClick={() => onClickEnd(index, delayedTasks, setDelayedTasks)}>End</button>
                                        <button>Green</button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="task-area green-task">
                    <p>Minor</p>
                    <ul>
                        {minorTasks.map((delayed, index) => {
                            return(
                                <li key={index}>
                                    <div className="list-row">
                                        <p className="todo-item">{delayed}</p>
                                        <button onClick={() => onClickEnd(index, minorTasks, setMinorTasks)}>End</button>
                                        <button>Black</button>
                                    </div>
                                </li>                                );
                        })}
                    </ul>
                </div>
                <div className="task-area">
                    <p>Reschedule</p>
                    <ul>
                        {rescheduleTasks.map((reschedule, index) => {
                            return(
                                <li key={index}>
                                    <div className="list-row">
                                        <p className="todo-item">{reschedule}</p>
                                        <button onClick={() => onClickEnd(index, rescheduleTasks, setRescheduleTasks)}>End</button>
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