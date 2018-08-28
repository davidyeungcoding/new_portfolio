import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './About.css';

const About = () => (
    <div>
        <div className='landingBackground' />
        <Grid>
            <Row>
                <Col className='aboutHeader' xs={12}>
                    <h3 id='about'>
                        About
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col xs={0} md={1} />
                <Col xs={12} md={7}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend ante eu magna feugiat consequat. 
                        Quisque porttitor sem in nibh auctor, aliquet fringilla ante tristique. Suspendisse ac diam sed purus 
                        dignissim volutpat in id est. Mauris interdum faucibus cursus. Sed ac maximus nisi. Fusce fringilla 
                        sapien diam, et rutrum quam mollis id. Duis fermentum pulvinar nibh lacinia sollicitudin. Quisque 
                        rutrum auctor eros, sit amet facilisis purus volutpat eu.
                    </p>
                </Col>
                <Col xs={0} md={1} />
                <Col xs={12} md={3}>
                    <h4>
                        CONTACT
                    </h4>
                    <p>
                        davidyeungcoding@gmail.com
                    </p>
                    <p>
                        <a href='https://www.linkedin.com/in/davidyeungcoding/'>
                            LinkedIn
                        </a>
                    </p>
                    <p>
                        <a href='https://github.com/davidyeungcoding'>
                            GitHub
                        </a>
                    </p>
                    <h4>
                        SKILLS
                    </h4>
                </Col>
            </Row>
        </Grid>
    </div>
)

export default About;