import React, { Componenet } from "react";
import { NavigationDrawer } from 'react-md';
import logo from '../../logo.svg';
import { Card, CardTitle, CardText, Paper } from 'react-md';
import SearchBox from '../SearchBox';


class HomePage extends Componenet {
    
    
    render(){
        <NavigationDrawer drawerTitle="Extras" toolbarTitle="Welcome to NY TIMES SEARCH">
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
        <SearchBox

        />
        </NavigationDrawer>
    }    
}

export default HomePage;
