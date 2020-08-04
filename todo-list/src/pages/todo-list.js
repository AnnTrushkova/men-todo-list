import React, {useContext} from "react"
import {TodoListContext} from "../context/tasks-list-context"
import Task from "./task"

const TodoList = () => {
    const {tasks} = useContext(TodoListContext)
    return (
        <div>
            {tasks.length ?
                <ul>
                    {tasks.map(task => {
                        return (
                            <Task task={task} key={task.id}/>
                        )
                    })}
                </ul>
                :
                <div>
                    No tasks
                </div>
            }
        </div>
    )
}

export default TodoList

