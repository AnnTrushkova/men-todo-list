import React, {createContext, useEffect, useState} from "react"
import {v4 as uuidv4} from 'uuid'

export const TodoListContext = createContext()

const TodoListContextProvider = (props) => {
    const initialState = JSON.parse(localStorage.getItem('tasks')) || []

    const [tasks, setTasks] = useState(initialState)
    const [editTask, setEditTask] = useState(null)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (title) => {
        setTasks([...tasks, {title, id: uuidv4()}])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const clearList = () => {
        setTasks([])
        setEditTask(null)
    }

    const findTask = (id) => {
        const item = tasks.find(task => task.id === id)
        setEditTask(item)
    }

    const editTaskItem = (title, id) => {
        const newTask = tasks.map(task => (task.id === id ? {title, id} : task))
        setTasks(newTask)
        setEditTask(null)
    }

    return (
        <TodoListContext.Provider value={{
            tasks, addTask, deleteTask, clearList, findTask,
            editTask, editTaskItem
        }}>
            {props.children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider

