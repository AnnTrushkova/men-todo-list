import React, {useContext} from 'react'
import {TodoListContext} from '../context/tasks-list-context'


const Task = ({task}) => {
    const {deleteTask, findTask} = useContext(TodoListContext)

    return (
        <li>
            <span>{task.title}</span>
            <div>
                <button
                    onClick={() => deleteTask(task.id)}
                >
                    delete
                </button>
                <button
                    onClick={() => findTask(task.id)}
                >
                    edit
                </button>
            </div>
        </li>
    )
}

export default Task
