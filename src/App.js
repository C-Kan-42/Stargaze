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
            <Route exact path="/about" component={About} />
            <Route exact path="/sf" render={() => <Location title={"San Francisco"} />} />
            <Route exact path="/pdx" render={() => <Location title={"Portland"} />} />
            <Route exact path="/la" render={() => <Location title={"Los Angeles"} />} />
            <Route component={NoMatch} />
          </Switch>
        </ContentLayout>
      </Layout>
    </Router>
  )
}

export default App
