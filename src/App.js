import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardTitle, CardText, Paper } from 'react-md';

const style = { maxWidth: 320 };


class App extends Component {

  render() {
    return <div className="App">
    <Paper
    zDepth={3}
    > 
        <Card style={style} className="md-block-centered">
            <CardTitle title="Using CardTitle" subtitle="With CardText" />
            <CardText>
              <p>
                The <code>CardText</code> component is really just useful for displaying any
                content with some additional padding.
          </p>
            </CardText>  
        </Card>
      </Paper>     
			</div>;
  }
}

export default App;
