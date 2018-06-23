import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, Button } from 'react-md';
import ComponentWrapper from '../ComponentWrapper';
import Result from "../Result"

const style = { maxWidth: 2000 };

function ResultsBox(props) {
    const articles = props.articles
    return 	<Card style={style} className="md-block-centered">
					<CardTitle title="Results"/>				
					{articles.map((article) => <Result title={article.title} />)}
				</Card>
}

export default (ResultsBox);