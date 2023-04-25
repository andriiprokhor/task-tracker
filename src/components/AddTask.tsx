import { useState } from "react"

const AddTask = ({ onAdd }: any) => {
  const [text, setText] = useState("")
  const [day, setDay] = useState("")
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e: any) => {
    e.preventDefault()

    if (!text) {
      alert("Please add a task")
      return
    }
    onAdd({ text, day, reminder })

    setText("")
    setDay("")
    setReminder(false)
  }
  return (
    <form action="" className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e: any) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Day and Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e: any) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={`${reminder}`}
          onChange={(e: any) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  )
}

export default AddTask
