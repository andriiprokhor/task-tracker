interface Button {
  color: string
  text: string
  onClick: any
}

const Button = ({ color, text, onClick }: Button) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: "steelblue",
}

export default Button
