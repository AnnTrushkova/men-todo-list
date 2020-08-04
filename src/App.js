import React from 'react'
import './App.css'
import TodoList from "./pages/todo-list"
import TodoListContextProvider from "./context/tasks-list-context"
import TaskForm from "./pages/task-form"
import Header from "./pages/header"
import 'materialize-css/dist/css/materialize.min.css'

const App = () => {
    return (
        <TodoListContextProvider>
            <div className="row">
                <div className="card">
                    <Header/>
                    <div className="card-content">
                        <TaskForm/>
                        <TodoList/>
                    </div>
                </div>
            </div>
        </TodoListContextProvider>
    )
}

export default App
