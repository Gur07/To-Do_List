import { useState } from "react";

function ToDoList() {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');
    const handleInput = (e) => {
        setNewTask(e.target.value)
    }
    const addTask = () => {
        if (newTask.trim()!=="") {
            setTask(t => [...t, newTask]);
            setNewTask('');
        }
        
    }
    const deleteTask = (index) => {
        const updatedTask = task.filter((_, i) => i !== index);
        setTask(updatedTask);
    }
    const moveUp = (index) => {
        if (index > 0) {
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setTask(updatedTask);
        }
    }
    const moveDown = (index) => {
        if (index < task.length-1) {
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
            setTask(updatedTask);
        }
    }



    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder="enter a task ..." value={newTask} onChange={handleInput} />
                <button className="addbutton" onClick={addTask}>Add</button>
            </div>
            <ol>
                {task.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}
                
                        </span>
                        <button className="delbutton" onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button className="moveup" onClick={() => moveUp(index)}>
                            up
                        </button>
                        <button className="movedown" onClick={() => moveDown(index)}>
                            down
                        </button>
                </li>)}
            </ol>
        </div>
    );
}
export default ToDoList