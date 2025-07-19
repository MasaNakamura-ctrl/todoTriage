import "./triage.css";

export const Triage = () =>{
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
                        <li>
                            <div className="list-row">
                                <p className="todo-item">This is Task</p>
                                <button>End</button>
                                <button>Yellow</button>
                            </div>
                            </li>
                    </ul>
                </div>
                <div className="task-area yellow-task">
                    <p>Delayed</p>
                    <ul>
                        <li>
                            <div className="list-row">
                                <p className="todo-item">This is Task</p>
                                <button>End</button>
                                <button>Green</button>
                            </div>
                            </li>
                    </ul>
                </div>
                <div className="task-area green-task">
                    <p>Minor</p>
                    <ul>
                        <li>
                            <div className="list-row">
                                <p className="todo-item">This is Task</p>
                                <button>End</button>
                                <button>Black</button>
                            </div>
                            </li>
                    </ul>
                </div>
                <div className="task-area">
                    <p>Reschedule</p>
                    <ul>
                        <li>
                            <div className="list-row">
                                <p className="todo-item">This is Task</p>
                                <button>End</button>
                                <button>Red</button>
                            </div>
                            </li>
                    </ul>
                </div>
            </div>
        </>

    );
}