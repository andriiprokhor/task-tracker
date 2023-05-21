import React, { useState, ChangeEvent, FormEvent } from "react"
import Popup from "./Popup"

interface AddTaskProps {
  onAdd: (task: Task) => void
}

interface Task {
  id: number
  text: string
  day: string
  reminder: boolean
}

const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
  const [text, setText] = useState("")
  const [day, setDay] = useState("")
  const [reminder, setReminder] = useState(false)
  const [showPopup, setShowPopup] = useState(true)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!text) {
      alert("Please add a task")
      return
    }

    const id = Math.floor(Math.random() * 10000) + 1
    const newTask: Task = { id, text, day, reminder }

    onAdd(newTask)

    setText("")
    setDay("")
    setReminder(false)

    onAdd && onAdd.length === 0 ? setShowPopup(true) : setShowPopup(false)
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleDayChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDay(e.target.value)
  }

  const handleReminderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReminder(e.currentTarget.checked)
  }

  return (
    <div>
      {showPopup && <Popup onClose={closePopup} />}

      <form action="" className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="">Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={handleTextChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Day and Time</label>
          <input
            type="text"
            placeholder="Add Day & Time"
            value={day}
            onChange={handleDayChange}
          />
        </div>
        <div className="form-control form-control-check">
          <label htmlFor="">Set Reminder</label>
          <input
            type="checkbox"
            checked={reminder}
            value={`${reminder}`}
            onChange={handleReminderChange}
          />
        </div>

        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    </div>
  )
}

export default AddTask
