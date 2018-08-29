import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import './About.css';

const About = () => (
    <div>
        <div className='landingBackground' />
        <Grid>
            <Row>
                <Col className='aboutHeader' xs={12}>
                    <h3 id='about' className='globalHeader'>
                        About
                    </h3>
                </Col>
            </Row>
            <Row className='aboutBody'>
                <Col xs={0} md={1} />
                <Col xs={12} md={7}>
                    <Row>
                        <Col xs={12}>
                            <p className='globalText aboutText'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend ante eu magna feugiat consequat. 
                                Quisque porttitor sem in nibh auctor, aliquet fringilla ante tristique. Suspendisse ac diam sed purus 
                                dignissim volutpat in id est. Mauris interdum faucibus cursus. Sed ac maximus nisi. Fusce fringilla 
                                sapien diam, et rutrum quam mollis id. Duis fermentum pulvinar nibh lacinia sollicitudin. Quisque 
                                rutrum auctor eros, sit amet facilisis purus volutpat eu.
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
                            <i class="fab fa-linkedin"> linkedin.com/in/davidyeungcoding</i>
                        </a>
                    </p>
                    <p>
                        <a className='globalLink' href='https://github.com/davidyeungcoding' rel='noopener noreferrer'>
                            <i class="fab fa-github-square"> github.com/davidyeungcoding</i>
                        </a>
                    </p>
                    <h4 className='globalHeader'>
                        Skills
                    </h4>
                    <p className='globalText'>
                        React.js, Handlebars.js, Node.js, Express, SQL, MongoDB, JavaScript, jQuery, HTML, CSS, Photoshop, Illustrator
                    </p>
                </Col>
            </Row>
        </Grid>
    </div>
)

export default About;