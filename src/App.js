import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardTitle, CardText, Paper } from 'react-md';
import { NavigationDrawer } from 'react-md';

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
        <Paper zDepth={5}>
          <Card style={style} className="md-block-centered">
          <Paper zDepth={3}>
            <CardTitle title="Using CardTitle" subtitle="With CardText" />
            <CardText>
              <p>
                The <code>CardText</code> component is really just useful for displaying any content with some additional padding.
              </p>
            </CardText>
          </Paper>  
          </Card>
        </Paper>  
      </NavigationDrawer>
			</div>;    
  }
}

export default App;
