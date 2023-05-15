import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from "react"
import AddTask from "./components/AddTask"
import Footer from "./components/Footer"
import About from "./components/About"
import ThemeContextWrapper from "./components/SwitchTheme"

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState<any[]>([])

  // Message when tasks > 3

  // Add Task

  const addTask = (task: any) => {
    // if (tasks.length < 3) {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
    // } else {
    //   alert("There are 3 tasks!")
    // }
  }

  // Delete Task
  const deleteTask = (id: any) => {
    setTasks(tasks.filter((task: any) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id: any) => {
    setTasks(
      tasks.map((task: any) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }
  return (
    <ThemeContextWrapper>
      <Router>
        <div className="container">
          <Header
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
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
