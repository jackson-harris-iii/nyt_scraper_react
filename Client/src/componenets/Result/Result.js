import React from 'react';
import { Card, CardTitle, Button } from 'react-md';

const style = { maxWidth: 500 };

function Result(props) {
    return 	<Card style={style} className="md-block-centered">
					<CardTitle title={props.title} />
						<Button raised primary>
							Save
						</Button>				
				</Card>
}

export default (Result);