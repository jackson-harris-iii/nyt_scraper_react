import React, { Component } from 'react';
import { NavigationDrawer } from 'react-md';
import logo from '../../logo.svg';
import { Paper } from 'react-md';
import SearchBox from '../SearchBox';
import SavedBox from '../SavedBox';
import API from '../../utils/API';



class HomePage extends Component {
    
    state = {
		savedArticles: [],
    };
    
    componentDidMount() {
        this.getSavedArticles();
    }

    getSavedArticles = () => {
        API.savedArticles()
            .then( (res) => {
                this.setState({ savedArticles: res.data,})
            });
    }

	render() {
		return (
			<div>
				<SearchBox />
				<SavedBox articles={this.state.savedArticles} />
			</div>
		);
	}
}

export default HomePage;
