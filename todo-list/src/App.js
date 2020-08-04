import React from 'react'
import './App.css'
import TodoList from "./pages/todo-list"
import TodoListContextProvider from "./context/tasks-list-context"
import TaskForm from "./pages/task-form"
import Header from "./pages/header"


const App = () => {
    return (
        <TodoListContextProvider>
            <Header/>
            <TaskForm/>
            <TodoList/>
        </TodoListContextProvider>
    )
}

export default App
