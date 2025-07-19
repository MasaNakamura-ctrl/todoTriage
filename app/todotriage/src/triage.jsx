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
            <div>
                <p>Red Task</p>
                <ul>
                    <li>
                        <p>This is Task</p>
                        <button>End</button>
                        <button>Yellow</button>
                    </li>
                </ul>
            </div>
            <div>
                <p>Yellow Task</p>
                <ul>
                    <li>
                        <p>This is Task</p>
                        <button>End</button>
                        <button>Green</button>
                    </li>
                </ul>
            </div>
            <div>
                <p>Green Task</p>
                <ul>
                    <li>
                        <p>This is Task</p>
                        <button>End</button>
                        <button>Black</button>
                    </li>
                </ul>
            </div>
            <div>
                <p>Black Task</p>
                <ul>
                    <li>
                        <p>This is Task</p>
                        <button>End</button>
                        <button>Red</button>
                    </li>
                </ul>
            </div>
        </>

    );
}