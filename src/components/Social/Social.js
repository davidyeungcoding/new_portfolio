import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import './Social.css';

const Social = () => (
    <ScrollableAnchor id='social'>
        <Grid>
            <Row>
                <Col className='socialContacts' xs={12}>
                    <span>
                        <a className='socialLink' href='https://www.linkedin.com/in/davidyeungcoding/' target='_blank' rel='noopener noreferrer'>
                            Linked <i className='fab fa-linkedin'></i>
                        </a>
                        <a className='socialLink socialContactsLast' href='https://github.com/davidyeungcoding' target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-github'> GitHub</i>
                        </a>
                        <p className='socialEmail'>
                            davidyeungcoding@gmail.com
                        </p>
                    </span>
                </Col>
            </Row>
        </Grid>
    </ScrollableAnchor>
)

export default Social;