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
                                <PageHeader className='globalHeader'
                                    data-aos='fade-right'
                                    data-aos-anchor-placement='bottom-bottom'
                                    data-aos-duration='650'
                                    data-aos-once='true'>
                                    David Yeung <small>Full-Stack Developer</small>
                                </PageHeader>
                            </Col>
                        </Row>
                    </ScrollableAnchor>
                    <Row className='aboutBody'>
                        <Col xs={0} md={1} />
                        <Col xs={12} md={6}>
                            <Row>
                                <Col xs={12}>
                                    <p className='globalText aboutText'
                                        data-aos='fade-down'
                                        data-aos-duration='650'
                                        data-aos-delay='400'
                                        data-aos-once='true'>
                                        I was previously working at an online ordering company for five years where the first two years were 
                                        spent as a customer service representative before moving up to QA Lead. While there, I learned some 
                                        basics of coding and developed an interest in the subject before deciding to study full time at a 
                                        coding bootcamp. Having a technical role professionally, combining it with my prior educational 
                                        background in art, and completing the bootcamp has made me a well balanced developer. I’m eager to get 
                                        an opportunity to apply what I’ve learned from all my experiences into the next project.
                                    </p>
                                </Col>
                                <Col xs={0} sm={3} />
                                <Col xs={12} sm={6}>
                                    <div
                                        data-aos='fade-top'
                                        data-aos-anchor-placement='bottom-bottom'
                                        data-aos-once='true'>
                                        <Button className='globalHeader aboutResume' bsSize='large' href='https://docs.google.com/document/d/15aQiKxziN8ybOCR1wEX5hWayDmrT9-k__kcJWCF8XgA/edit?usp=sharing' target='_blank' rel='noopener noreferrer' block>
                                            Resume
                                        </Button>
                                    </div>
                                </Col>
                                <Col xs={0} sm={3} />
                            </Row>
                        </Col>
                        <Col xs={0} md={1} />
                        <Col mdHidden smHidden xsHidden xs={12} md={3}>
                            <h4 className='globalHeader aboutContact'
                                data-aos='fade-down'
                                data-aos-anchor-placement='bottom-bottom'
                                data-aos-duration='650'
                                data-aos-delay='800'
                                data-aos-once='true'>
                                Contact
                            </h4>
                            <p className='globalText'
                                data-aos='fade-left'
                                data-aos-anchor-placement='bottom-bottom'
                                data-aos-duration='650'
                                data-aos-delay='1000'
                                data-aos-once='true'>
                                davidyeungcoding@gmail.com
                            </p>
                            <p>
                                <a className='globalLink' href='https://www.linkedin.com/in/davidyeungcoding/' target='_blank' rel='noopener noreferrer'>
                                    <i className='fab fa-linkedin'
                                        data-aos='fade-left'
                                        data-aos-anchor-placement='bottom-bottom'
                                        data-aos-duration='650'
                                        data-aos-delay='1200'
                                        data-aos-once='true'> linkedin.com/in/davidyeungcoding</i>
                                </a>
                            </p>
                            <p>
                                <a className='globalLink' href='https://github.com/davidyeungcoding' target='_blank' rel='noopener noreferrer'>
                                    <i className='fab fa-github-square'
                                        data-aos='fade-left'
                                        data-aos-anchor-placement='bottom-bottom'
                                        data-aos-duration='650'
                                        data-aos-delay='1400'
                                        data-aos-once='true'> github.com/davidyeungcoding</i>
                                </a>
                            </p>
                            <h4 className='globalHeader'
                                data-aos='fade-top'
                                data-aos-anchor-placement='bottom-bottom'
                                data-aos-duration='650'
                                data-aos-delay='1600'
                                data-aos-once='true'>
                                Skills
                            </h4>
                            <p className='globalText'
                                data-aos='fade-left'
                                data-aos-anchor-placement='top-bottom'
                                data-aos-duration='650'
                                data-aos-delay='1600'
                                data-aos-once='true'>
                                React.js &bull; Handlebars.js &bull; Node.js &bull; Express &bull; SQL &bull; MongoDB &bull; JavaScript &bull; jQuery &bull; HTML &bull; CSS &bull; GitHub &bull; Photoshop &bull; Illustrator
                            </p>
                        </Col>
                        <Col lgHidden xs={12} md={3}>
                            <h4 className='globalHeader aboutContact'
                                data-aos='fade-down'
                                data-aos-duration='650'
                                data-aos-once='true'>
                                Contact
                            </h4>
                            <p className='globalText'
                                data-aos='fade-right'
                                data-aos-duration='650'
                                data-aos-once='true'>
                                davidyeungcoding@gmail.com
                            </p>
                            <p>
                                <a className='globalLink' href='https://www.linkedin.com/in/davidyeungcoding/' target='_blank' rel='noopener noreferrer'>
                                    <i className='fab fa-linkedin'
                                    data-aos='fade-right'
                                    data-aos-duration='650'
                                    data-aos-once='true'> linkedin.com/in/davidyeungcoding</i>
                                </a>
                            </p>
                            <p>
                                <a className='globalLink' href='https://github.com/davidyeungcoding' target='_blank' rel='noopener noreferrer'>
                                    <i className='fab fa-github-square'
                                    data-aos='fade-right'
                                    data-aos-duration='650'
                                    data-aos-once='true'> github.com/davidyeungcoding</i>
                                </a>
                            </p>
                            <h4 className='globalHeader'
                                data-aos='fade-up'
                                data-aos-duration='650'
                                data-aos-once='true'>
                                Skills
                            </h4>
                            <p className='globalText'
                                data-aos='fade-right'
                                data-aos-duration='650'
                                data-aos-once='true'>
                                React.js &bull; Handlebars.js &bull; Node.js &bull; Express &bull; SQL &bull; MongoDB &bull; JavaScript &bull; jQuery &bull; HTML &bull; CSS &bull; GitHub &bull; Photoshop &bull; Illustrator
                            </p>
                        </Col>
                        <Col xs={0} md={1} />
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default About;