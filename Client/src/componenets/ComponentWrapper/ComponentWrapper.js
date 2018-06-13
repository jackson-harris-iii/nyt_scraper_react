import React from 'react';
import { Paper } from 'react-md';

const style = { maxWidth: 650 };

function ComponentWrapper(props) {

    return (
        <div className="md-block-centered">
            <Paper
                zDepth={3}
            >
                {props.children}
            </Paper>
       </div> 
    );
}

export default (ComponentWrapper);