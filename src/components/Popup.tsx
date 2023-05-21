import React from "react"

interface PopupProps {
  onClose: () => void
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className="popup">
      <h3>Setting a Reminder</h3>
      <p>Double-click on a task to set a reminder.</p>
      <button onClick={onClose} className="btn-reminder">
        Ok
      </button>
    </div>
  )
}

export default Popup
