import React from 'react';
import { Card, CardTitle, Button } from 'react-md';
import { Link } from 'react-router-dom';


const style = { maxWidth: 500 };

function Result(props) {
    return <Card style={style} className="md-block-centered">
        <Link to={"/articles/" + article._id}>
            <CardTitle title={props.title} />
        </Link>    
        <Button onClick={() => this.removeArticle(article._id)} raised primary>
            Delete
						</Button>
    </Card>
}

export default (Result);