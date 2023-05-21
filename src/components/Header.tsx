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
          color={showAdd ? "#f87171" : "#121212"}
          onClick={onAdd}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: "Add your first task:",
}

const param = {}

export default Header
