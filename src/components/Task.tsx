const Task = ({ task, onDelete, onToggle }: any) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <div
          style={{ color: "#f87171", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        >
          X
        </div>
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
