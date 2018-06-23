import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, Button } from 'react-md';
import ComponentWrapper from '../ComponentWrapper';
import SavedArticle from "../SavedArticle"

const style = { maxWidth: 500 };

function SavedBox(props) {
	const articles = props.articles;
	return (
		<ComponentWrapper>
			<Card style={style} className="md-block-centered">
				<CardTitle title="Results" subtitle="Articles Directly from the New York" />
				{articles.map((article) => <SavedArticle title={article.title} />)}
			</Card>
		</ComponentWrapper>
	);
}

export default (SavedBox);