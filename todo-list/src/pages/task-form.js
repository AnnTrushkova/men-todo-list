import React, {useContext, useState, useEffect} from 'react'
import {TodoListContext} from '../context/tasks-list-context'

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

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleInputChange}
                value={title}
                type="text"
                placeholder="Add task"
                required
            />
            <div>
                <button>
                    {editTask ?
                        <span> Edit Task</span>
                        :
                        <span> Add Task</span>
                    }
                </button>

                <button
                    onClick={() => clearList()}
                    disabled={tasks.length === 0}
                >
                    Clear List
                </button>
            </div>
        </form>
    )
}

export default TaskForm


