import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import './Social.css';

const Social = () => (
    <ScrollableAnchor id='social'>
        <Grid>
            <Row>
                <Col className='socialHeader' xs={12}>
                    <h3 className='globalHeader'>
                        Contact
                    </h3>
                </Col>
            </Row>
            <Row>

            </Row>
        </Grid>
    </ScrollableAnchor>
)

export default Social;