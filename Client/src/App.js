import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { Card, CardTitle, CardText, Paper } from 'react-md';
import { NavigationDrawer } from 'react-md';
import SearchBox from "./componenets/SearchBox"

const style = { maxWidth: 320 };


class App extends Component {

  state = {
    searchMade: false   
  }

  

  render() {
    return <div className="App">
				<NavigationDrawer drawerTitle="Extras" toolbarTitle="Welcome to NY TIMES SEARCH">
        <Paper zDepth={0}>
        	<div className="App"
               zDepth={3}
               >
            {/* <header className="App-header">
							<img src={logo} className="App-logo" alt="logo" />
							<h1 className="App-title">Powered by React</h1>
						</header> */}
					</div>
			  </Paper>
        <Router>
          <Switch>
            <Route exact path="/" component={SearchBox} />
          </Switch>  
        </Router>  
      </NavigationDrawer> 
			</div>;    
  }
}

export default App;
