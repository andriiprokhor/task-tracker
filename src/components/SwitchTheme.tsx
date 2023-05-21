import { useEffect, useState } from "react"
import { ThemeContext, themes } from "./DarkTheme"

interface ThemeContextWrapperProps {
  children: React.ReactNode
}

export default function ThemeContextWrapper(
  props: ThemeContextWrapperProps
): JSX.Element {
  const [theme, setTheme] = useState(themes.dark)

  function changeTheme() {
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    )
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

    return () => {
      // Cleanup logic (remove added classes) if necessary
      switch (theme) {
        case themes.light:
          document.body.classList.remove("white-content")
          break
        case themes.dark:
        default:
          document.body.classList.remove("white-content")
      }
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
