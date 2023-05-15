import { useEffect, useState } from "react"
import { ThemeContext, themes } from "./DarkTheme"

export default function ThemeContextWrapper(props: any) {
  const [theme, setTheme] = useState(themes.dark)

  function changeTheme(theme: any) {
    setTheme(theme)
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add("white-content")
        break
      case themes.dark:
      default:
        document.body.classList.add("white-content")
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
