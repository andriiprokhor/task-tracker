import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from "react"
import AddTask from "./components/AddTask"
import Footer from "./components/Footer"
import About from "./components/About"
import ThemeContextWrapper from "./components/SwitchTheme"

interface Task {
  id: number
  text: string
  day: string
  reminder: boolean
}

const App = (): JSX.Element => {
  const [showAddTask, setShowAddTask] = useState<boolean>(false)
  const [tasks, setTasks] = useState<Task[]>([])

  // Message when tasks > 3

  // Add Task
  const addTask = (task: Task): void => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask: Task = { ...task, id }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id: number): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <ThemeContextWrapper>
      <Router>
        <div className="main-header">Task Tracker</div>
        <div className="container">
          <Header
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
            title={tasks.length > 0 ? "Add task:" : "Add first task:"}
          />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  {showAddTask && <AddTask onAdd={addTask} />}
                  <div className="tasks">
                    {tasks.length > 0 ? (
                      <Tasks
                        tasks={tasks}
                        onDelete={deleteTask}
                        onToggle={toggleReminder}
                      />
                    ) : (
                      "No Tasks To Show"
                    )}
                  </div>
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeContextWrapper>
  )
}

export default App
