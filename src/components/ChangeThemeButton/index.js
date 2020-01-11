import React, { useState, useEffect } from "react"

import "./style.css"

const ChangeThemeButton = () => {
  const [theme, setTheme] = useState(null)

  const isLightMode = theme === "light"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <button
      className="floatButton"
      title={`Activate ${isLightMode ? "dark" : "light"} mode`}
      onClick={() => {
        window.__setPreferredTheme(isLightMode ? "dark" : "light")
      }}
    >
      <i className="fa fa-adjust" aria-hidden="true"></i>
    </button>
  )
}

export default ChangeThemeButton
