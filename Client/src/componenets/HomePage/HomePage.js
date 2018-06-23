import React, { Component } from 'react';
import { NavigationDrawer } from 'react-md';
import logo from '../../logo.svg';
import { Paper } from 'react-md';
import SearchBox from '../SearchBox';
import SavedBox from '../SavedBox';



class HomePage extends Component {
    
    
    render(){
       return <div>
            <SearchBox />
            <SavedBox /> 
        </div>           
    }    
}

export default HomePage;
