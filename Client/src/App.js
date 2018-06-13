import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardTitle, CardText, Paper } from 'react-md';
import { NavigationDrawer } from 'react-md';
import SearchBox from "./componenets/SearchBox"

const style = { maxWidth: 320 };


class App extends Component {

  render() {
    return <div className="App">
				<NavigationDrawer drawerTitle="react-md with CRA" toolbarTitle="Welcome to NY TIMES SEARCH">
        <Paper zDepth={0}>
        	<div className="App"
               zDepth={3}
               >
            <header className="App-header">
							<img src={logo} className="App-logo" alt="logo" />
							<h1 className="App-title">Powered by React</h1>
						</header>
					</div>
			  </Paper>
          <SearchBox />  
      </NavigationDrawer>
			</div>;    
  }
}

export default App;
