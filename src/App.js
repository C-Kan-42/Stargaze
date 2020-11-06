import React from "react"
import "./App.scss"
import Header from "./components/Header/header"
import DropdownMenu from "./components/Dropdown/dropdown"
import Layout from "./components/Layout/layout"
import ContentLayout from "./components/ContentLayout/contentlayout"

function App() {
  return (
    <Layout>
      <Header header="Stargaze"/>
      <ContentLayout>
        <DropdownMenu />
      </ContentLayout>
    </Layout>
  )
}

export default App
