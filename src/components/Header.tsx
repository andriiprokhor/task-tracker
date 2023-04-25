import Button from "./Button"
import { useLocation } from "react-router-dom"

const Header = ({ title, onAdd, showAdd }: any) => {
  const location = useLocation()
  return (
    <header className="header">
      <h1 style={param}>{title}</h1>
      {location.pathname === "/" && (
        <Button
          text={showAdd ? "X" : "Add"}
          color={showAdd ? "red" : "green"}
          onClick={onAdd}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
}

const param = {}

export default Header
