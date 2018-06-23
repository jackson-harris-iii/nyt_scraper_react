import React from 'react';
import { Card, CardTitle, Button } from 'react-md';

const style = { maxWidth: 650 };

function Result(props) {
    return 	<Card style={style} className="md-block-centered">
					<CardTitle  subtitle={'Headline'} title={props.title} />
						<Button
						 onClick={props.saveArticle(props.key)}
						 raised primary>
							Save
						</Button>				
				</Card>
}

export default (Result);