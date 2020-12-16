import React from "react"
import {BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom';
import "./App.scss"
import Header from "./components/Header/header"
import DropdownMenu from "./components/Dropdown/dropdown"
import Layout from "./components/Layout/layout"
import ContentLayout from "./components/ContentLayout/contentlayout"
import About from './components/About/about';
import Location from './components/Location/location';
import NoMatch from './components/NoMatch/nomatch';

function App() {
  return (
    <Router>
      <Layout>
        <Header header="Stargaze"/>
        <ContentLayout>
          <Switch>
            <Route exact path="/Stargaze" component={DropdownMenu} />
            <Route path="/Stargaze/about" component={About} />
            <Route path="/Stargaze/sf" render={() => <Location title={"San Francisco"} lat={37.7749} lng={-122.4194} />} />
            <Route path="/Stargaze/pdx" render={() => <Location title={"Portland"} lat={45.5051} lng={-122.6750} />} />
            <Route path="/Stargaze/la" render={() => <Location title={"Los Angeles"} lat={34.0522} lng={-118.2437} />} />
            <Route component={NoMatch} />
          </Switch>
        </ContentLayout>
      </Layout>
    </Router>
  )
}

export default App
