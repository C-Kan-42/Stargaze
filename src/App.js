import React from "react"
import "./App.scss"
import Header from "./components/Header/header"
import DropdownMenu from "./components/Dropdown/dropdown"

function App() {
  return (
    <div className="App">
      <Header header="Stargaze"/>
      <DropdownMenu />
    </div>
  )
}

export default App
