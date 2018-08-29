import React, {Component} from 'react';
import {Grid, Row, Col, Button, PageHeader} from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import {configureAnchors} from 'react-scrollable-anchor';
import './About.css';

configureAnchors({offset: -50, scrollDuration: 700});

class About extends Component {
    render() {
        return(
            <div>
                <ScrollableAnchor id='landingTop'>
                    <div className='landingBackground' />
                </ScrollableAnchor>
                <Grid>
                    <ScrollableAnchor id={'about'}>
                        <Row>
                            <Col className='aboutHeader' xs={12}>
                                <PageHeader className='globalHeader'>
                                    David Yeung <small>Full-Stack Developer</small>
                                </PageHeader>
                            </Col>
                        </Row>
                    </ScrollableAnchor>
                    <Row className='aboutBody'>
                        <Col xs={0} md={1} />
                        <Col xs={12} md={7}>
                            <Row>
                                <Col xs={12}>
                                    <p className='globalText aboutText'>
                                        I was previously working at an online ordering company for five years where the first two years were 
                                        spent as a customer service representative before moving up to QA Lead. While there, I learned some 
                                        basics of coding and developed an interest in the subject before deciding to study full time at a 
                                        coding bootcamp. Having a technical role professionally, combining it with my prior educational 
                                        background in art, and completing the bootcamp has made me a well balanced developer. I’m eager to get 
                                        an opportunity to apply what I’ve learned from all my experiences into the next project.
                                    </p>
                                </Col>
                                <Col xs={0} sm={4} />
                                <Col xs={12} sm={4}>
                                    <Button className='globalHeader aboutResume' bsSize='large' href='https://docs.google.com/document/d/15aQiKxziN8ybOCR1wEX5hWayDmrT9-k__kcJWCF8XgA/edit?usp=sharing' target='_blank' rel='noopener noreferrer' block>
                                        Resume
                                    </Button>
                                </Col>
                                <Col xs={0} sm={4} />
                            </Row>
                        </Col>
                        <Col xs={0} md={1} />
                        <Col xs={12} md={3}>
                            <h4 className='globalHeader'>
                                Contact
                            </h4>
                            <p className='globalText'>
                                davidyeungcoding@gmail.com
                            </p>
                            <p>
                                <a className='globalLink' href='https://www.linkedin.com/in/davidyeungcoding/' rel='noopener noreferrer'>
                                    <i className='fab fa-linkedin'> linkedin.com/in/davidyeungcoding</i>
                                </a>
                            </p>
                            <p>
                                <a className='globalLink' href='https://github.com/davidyeungcoding' rel='noopener noreferrer'>
                                    <i className='fab fa-github-square'> github.com/davidyeungcoding</i>
                                </a>
                            </p>
                            <h4 className='globalHeader'>
                                Skills
                            </h4>
                            <p className='globalText'>
                                React.js &bull; Handlebars.js &bull; Node.js &bull; Express &bull; SQL &bull; MongoDB &bull; JavaScript &bull; jQuery &bull; HTML &bull; CSS &bull; Photoshop &bull; Illustrator
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default About;