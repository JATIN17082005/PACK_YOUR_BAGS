// integration.js - Script to integrate React components into the HTML page

document.addEventListener("DOMContentLoaded", () => {
    // Add React and ReactDOM scripts
    const reactScript = document.createElement("script")
    reactScript.src = "https://unpkg.com/react@17/umd/react.production.min.js"
    reactScript.crossOrigin = ""
  
    const reactDOMScript = document.createElement("script")
    reactDOMScript.src = "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"
    reactDOMScript.crossOrigin = ""
  
    // Add API scripts
    const expenseTrackerAPI = document.createElement("script")
    expenseTrackerAPI.src = "api/expense-tracker.js"
  
    const languageGuideAPI = document.createElement("script")
    languageGuideAPI.src = "api/language-guide.js"
  
    const weatherAPI = document.createElement("script")
    weatherAPI.src = "api/weather-api.js"
  
    // Add component scripts
    const expenseTrackerComponent = document.createElement("script")
    expenseTrackerComponent.src = "components/ExpenseTracker.js"
  
    const languageGuideComponent = document.createElement("script")
    languageGuideComponent.src = "components/LanguageGuide.js"
  
    const weatherWidgetComponent = document.createElement("script")
    weatherWidgetComponent.src = "components/WeatherWidget.js"
  
    // Append scripts to document in the correct order
    document.head.appendChild(reactScript)
    document.head.appendChild(reactDOMScript)
  
    // Wait for React to load before adding the API scripts
    reactDOMScript.onload = () => {
      document.head.appendChild(expenseTrackerAPI)
      document.head.appendChild(languageGuideAPI)
      document.head.appendChild(weatherAPI)
  
      // Wait for API scripts to load before adding component scripts
      weatherAPI.onload = () => {
        document.head.appendChild(expenseTrackerComponent)
        document.head.appendChild(languageGuideComponent)
        document.head.appendChild(weatherWidgetComponent)
      }
    }
  
    // Create containers for React components if they don't exist
    const createComponentContainers = () => {
      // Create container for Weather Widget in the hero section
      const heroSection = document.querySelector(".hero")
      if (heroSection) {
        const weatherContainer = document.createElement("div")
        weatherContainer.id = "weather-widget-container"
        weatherContainer.style.position = "absolute"
        weatherContainer.style.top = "20px"
        weatherContainer.style.right = "20px"
        weatherContainer.style.zIndex = "10"
        heroSection.appendChild(weatherContainer)
      }
  
      // Create container for Language Guide after destinations section
      const destinationsSection = document.querySelector(".destinations")
      if (destinationsSection) {
        const languageContainer = document.createElement("div")
        languageContainer.id = "language-guide-container"
        languageContainer.style.margin = "50px auto"
        destinationsSection.parentNode.insertBefore(languageContainer, destinationsSection.nextSibling)
      }
  
      // Create container for Expense Tracker before the footer
      const footer = document.querySelector(".footer")
      if (footer) {
        const expenseContainer = document.createElement("div")
        expenseContainer.id = "expense-tracker-container"
        expenseContainer.style.margin = "50px auto"
        expenseContainer.style.padding = "0 20px"
        footer.parentNode.insertBefore(expenseContainer, footer)
      }
    }
  
    // Create component containers after a short delay to ensure DOM is ready
    setTimeout(createComponentContainers, 500)
  })
  
  