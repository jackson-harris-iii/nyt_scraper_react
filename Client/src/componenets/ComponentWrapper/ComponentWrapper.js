import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'react-md';

const style = { maxWidth: 650 };

function ComponentWrapper(props) {

    return (
       <Paper 
        zDepth={3}
        style={sytle}
        >
        {props.children}
        </Paper>
    );
}

export default (ComponentWrapper);