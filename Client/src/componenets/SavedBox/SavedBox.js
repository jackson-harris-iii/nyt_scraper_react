import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, Button } from 'react-md';
import ComponentWrapper from '../ComponentWrapper';
import SavedArticle from "../SavedArticle"

const style = { maxWidth: 2000 };

function SavedBox(props) {
	const articles = props.articles;
	return (
		<ComponentWrapper>
			<Card style={style} className="md-block-centered">
				<CardTitle title="Saved Articles" subtitle="Stored w/MongoDB" />
				{articles.map((article) => 
					<SavedArticle 
						title={article.title} 
						id={article._id} 
						/>)}
			</Card>
		</ComponentWrapper>
	);
}

export default (SavedBox);