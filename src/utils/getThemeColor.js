const getThemeColor = () => {
  const theme = typeof window !== "undefined" && window.__theme

  if (theme === "light") return "#faf9f8"
  if (theme === "dark") return "#3b3a39"
}

export default getThemeColor
