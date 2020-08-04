import React, {useContext, useState, useEffect} from 'react'
import {TodoListContext} from '../context/tasks-list-context'
import './styles.css'

const TaskForm = () => {
    const {tasks, addTask, clearList, editTask, editTaskItem} = useContext(TodoListContext)

    const [title, setTitle] = useState('')

    const handleInputChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!editTask) {
            addTask(title)
            setTitle('')
        } else {
            editTaskItem(title, editTask.id)
        }
    }

    useEffect(() => {
        if (editTask) {
            setTitle(editTask.title)
        } else {
            setTitle('')
        }
    }, [editTaskItem])

    const clearAllList = () => {
        clearList()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleInputChange}
                value={title}
                placeholder="Add task"
                required
            />

            <div className="card-buttons">
                {editTask ?
                    <button className="btn indigo darken-4" type="submit" name="action">
                        Edit Task
                    </button>
                    :
                    <button className="btn waves-effect waves-light" type="submit" name="action">
                        Add Task
                    </button>
                }

                <button
                    className="btn red lighten-1"
                    onClick={clearAllList}
                    disabled={tasks.length === 0}
                >
                    Clear List
                </button>
            </div>
        </form>
    )
}

export default TaskForm


