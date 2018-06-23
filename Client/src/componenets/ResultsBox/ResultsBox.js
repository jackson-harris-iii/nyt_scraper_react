import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, Button } from 'react-md';
import ComponentWrapper from '../ComponentWrapper';
import Result from "../Result"

const style = { maxWidth: 500 };

function ResultsBox(props) {
    const articles = props.articles
    return <ComponentWrapper>
				<Card style={style} className="md-block-centered">
					<CardTitle title="Results" subtitle="Articles Directly from the New York" />
					<div>
						<Button raised primary>
							Search Again
						</Button>
					</div>
					{articles.map((article) => <Result title={article.title} />)}
				</Card>
			</ComponentWrapper>;
}

export default (ResultsBox);