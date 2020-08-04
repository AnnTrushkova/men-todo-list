import React, {useContext} from 'react'
import {TodoListContext} from '../context/tasks-list-context'
import './styles.css'
import deleteIcon from '../img/deleteIcon.png'
import editIcon from '../img/editIcon.png'

const Task = ({task}) => {
    const {deleteTask, findTask} = useContext(TodoListContext)

    return (
        <li className="todo-task">
            <span>{task.title}</span>
            <div>
                <a
                    onClick={() => deleteTask(task.id)}
                    className="card-icon-button"
                >
                    <img src={deleteIcon} alt=""/>
                </a>

                <a
                    onClick={() => findTask(task.id)}
                    className="card-icon-button"
                >
                    <img src={editIcon} alt=""/>
                </a>
            </div>
        </li>
    )
}

export default Task
