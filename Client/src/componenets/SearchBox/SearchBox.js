import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, TextField, DatePicker, Button } from 'react-md';
import ComponentWrapper from "../ComponentWrapper"

const style = { maxWidth: 650 };

function SearchBox(props) {
    return (
            <Card 
                style={style}
                className="md-block-centered"
            >
                <CardTitle title="Search" subtitle="Articles Directly from the New York Times" />
                <div ClassName="md-grid">
                    <div ClassName="md-cell">
                        <input
                            id="Topic"
                            label="Topic"
                            // size={12}
                            // fullWidth={true}
                            type="text"
                            className="form-control"
                            placeholder='Topic'
                            onChange={props.handleTopicChange}
                    />
                
                    </div>
                </div>
                <div ClassName="md-grid">
                    <div ClassName="md-cell">
                        <input
                            id="startYear"
                            label="Start Year"
                            // displayMode="portrait"
                            placeholder="start year"
                            onChange={props.handleStartYearChange}
                        />
                    </div>
                </div>
                <div ClassName="md-grid">
                    <div ClassName="md-cell">
                        <input
                            id="endYear"
                            label="End Year"
                            // displayMode="portrait"
                            placeholder="end year"
                            onChange={props.handleEndYearChange}                    
                        />
                    </div>
                </div>
                <div>
                    <Button
                    onClick={props.handleFormSubmit}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                    raised 
                    primary>
                        Search
                    </Button>
                </div>
            </Card>    
    );
}

export default (SearchBox);