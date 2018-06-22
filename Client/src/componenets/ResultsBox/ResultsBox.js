import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, TextField, DatePicker, Button } from 'react-md';
import ComponentWrapper from '../ComponentWrapper';

const style = { maxWidth: 500 };

function ResultsBox(props) {
    return (
        <ComponentWrapper>
            <Card
                style={style}
                className="md-block-centered"
            >
                <CardTitle title="Search" subtitle="Articles Directly from the New York" />
                <div ClassName="md-grid">
                    <div ClassName="md-cell">
                        <TextField
                            id="Topic"
                            label="Topic"
                            size={12}
                            fullWidth={true}
                        />
                    </div>
                </div>
                <div ClassName="md-grid">
                    <div ClassName="md-cell">
                        <DatePicker
                            id="startYear"
                            label="Start Year"
                            displayMode="portrait"
                        />
                    </div>
                </div>
                <div ClassName="md-grid">
                    <div ClassName="md-cell">
                        <DatePicker
                            id="endYear"
                            label="End Year"
                            displayMode="portrait"
                        />
                    </div>
                </div>
                <div>
                    <Button

                        raised primary>
                        Search</Button>
                </div>
            </Card>
        </ComponentWrapper>
    );
}

export default (ResultsBox);