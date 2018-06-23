import React, { Component } from 'react';
import { NavigationDrawer } from 'react-md';
import logo from '../../logo.svg';
import { Paper } from 'react-md';
import SearchBox from '../SearchBox';
import SavedBox from '../SavedBox';
import API from '../../utils/API';
import ComponentWrapper from '../ComponentWrapper';
import ResultsBox from '../ResultsBox';



class HomePage extends Component {
    
    state = {
        savedArticles: [],
        searchResults: [],
        topic: '',
        startYear: '',
        endYear: '',
    };
    
    componentDidMount() {
        this.getSavedArticles();
    }

    getSavedArticles = () => {
        API.savedArticles()
            .then( res => this.setState({ savedArticles: res.data }));
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        
        API.search(this.state.topic, this.state.startYear, this.state.endYear)
            .then( (res) => {
                console.log(res)
                this.setState({ searchResults: res.data })
            })
    }

    handleTopicChange = (event) => {
        this.setState({ topic: event.target.value });
    }

    handleStartYearChange = (event) => {
        this.setState({ startYear: event.target.value });
    }

    handleEndYearChange = (event) => {
        this.setState({ endYear: event.target.value });
    }

	render() {
		return (
			<div>
                <ComponentWrapper>    
                    <SearchBox
                        handleTopicChange={this.handleTopicChange}
                        handleStartYearChange={this.handleStartYearChange}
                        handleEndYearChange={this.handleEndYearChange}
                        handleFormSubmit={this.handleFormSubmit}
                     />
                    <ResultsBox articles={this.state.searchResults} />
                    <SavedBox articles={this.state.savedArticles} />
                </ComponentWrapper>    
			</div>
		);
	}
}

export default HomePage;
