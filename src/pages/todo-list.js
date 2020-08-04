import React, {useContext} from "react"
import {TodoListContext} from "../context/tasks-list-context"
import Task from "./task"
import './styles.css'

const TodoList = () => {
    const {tasks} = useContext(TodoListContext)
    return (
        <div className="card-tasks-list">
            {tasks.length ?
                <ul>
                    {tasks.map(task => {
                        return (
                            <Task task={task} key={task.id}/>
                        )
                    })}
                </ul>
                :
                <h4>
                    No tasks
                </h4>
            }
        </div>
    )
}

export default TodoList

