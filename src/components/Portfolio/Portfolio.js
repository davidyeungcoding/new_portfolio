import React from 'react';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import './Portfolio.css';

const Portfolio = () => (
    <div className='portfolioContainer'>
        <Grid>
            <ScrollableAnchor id='previousWorks'>
                <Row>
                    <Col className='portfolioHeader' xs={12}>
                        <h3 className='globalHeader'>
                            Previous Works
                        </h3>
                    </Col>
                </Row>
            </ScrollableAnchor>
            <Row>
                <Col className='portfolioCard' xs={12} md={6}>
                    <Thumbnail className='portfolioThumbnail' href='http://www.beerpeersapp.com/' target='_blank' rel='noopener noreferrer' src={require('../../images/beer_peers.jpg')}>
                        <h3 className='globalHeader portfolioCardHeader'>Beer Peers</h3>
                        <p className='globalText portfolioThumbDesc'>
                            Social media platform for brewers where they can come together and share recipes. Users will 
                            be able to create an account, post recipes, view and like recipes from other users, and follow 
                            their favorite brewers. Top recipes and brewers are tracked and posted in order based on number 
                            of followers or likes.
                        </p>
                    </Thumbnail>
                    <Row className='portfolioRowBtn'>
                        <Col xs={3} />
                        <Col xs={6}>
                            <Button className='globalHeader portfolioBtn' href='https://github.com/davidyeungcoding/beer-peers' target='_blank' rel='noopener noreferrer' block>
                                View on GitHub
                            </Button>
                        </Col>
                        <Col xs={3} />
                    </Row>
                </Col>
                <Col className='portfolioCard' xs={12} md={6}>
                    <Thumbnail className='portfolioThumbnail' href='https://cookie-seller-app.herokuapp.com/' target='_blank' rel='noopener noreferrer' src={require('../../images/cookie_finder.jpg')}>
                        <h3 className='globalHeader portfolioCardHeader'>Cookie Finder</h3>
                        <p className='globalText portfolioThumbDesc'>
                            Designed for retailers, without a permanent location, to post what they have on offer, where 
                            they are located, and when they they will be available. Potential buyers can then go through 
                            the seller’s catalog and reserve their orders online.
                        </p>
                    </Thumbnail>
                    <Row className='portfolioRowBtn'>
                        <Col xs={3} />
                        <Col xs={6}>
                            <Button className='globalHeader portfolioBtn' href='https://github.com/davidyeungcoding/Cookie_Finder' target='_blank' rel='noopener noreferrer' block>
                                View on GitHub
                            </Button>
                        </Col>
                        <Col xs={3} />
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className='portfolioCard' xs={12} md={6}>
                    <Thumbnail className='portfolioThumbnail' href='https://americone-dream.github.io/Loiter/' target='_blank' rel='noopener noreferrer' src={require('../../images/Loiter.jpg')}>
                        <h3 className='globalHeader portfolioCardHeader'>Loiter</h3>
                        <p className='globalText portfolioThumbDesc'>
                            When planning to go to the big game or a concert you can always count on traffic both on 
                            the way to and back from the event. The concept behind this project was to help people cut 
                            into the down time by finding locations nearby to hangout before or after while going through 
                            the process of purchasing their tickets.
                        </p>
                    </Thumbnail>
                    <Row className='portfolioRowBtn'>
                        <Col xs={3} />
                        <Col xs={6}>
                            <Button className='globalHeader portfolioBtn' href='https://github.com/davidyeungcoding/Loiter' target='_blank' rel='noopener noreferrer' block>
                                View on GitHub
                            </Button>
                        </Col>
                        <Col xs={3} />
                    </Row>
                </Col>
                <Col className='portfolioCard' xs={12} md={6}>
                    <Thumbnail className='portfolioThumbnail' href='https://davidyeungcoding.github.io/Crystal-Collector/' target='_blank' rel='noopener noreferrer' src={require('../../images/crystal_collector.jpg')}>
                        <h3 className='globalHeader portfolioCardHeader'>Crystal Collector</h3>
                        <p className='globalText portfolioThumbDesc'>
                            A simple game built using Javascript, HTML, and CSS. You are given a target number and four 
                            buttons with hidden values associated with each. The total displayed will keep a running tally
                            as you click on each button until you match or go over the target.
                        </p>
                    </Thumbnail>
                    <Row className='portfolioRowBtn'>
                        <Col xs={3} />
                        <Col xs={6}>
                            <Button className='globalHeader portfolioBtn' href='https://github.com/davidyeungcoding/Crystal-Collector' target='_blank' rel='noopener noreferrer' block>
                                View on GitHub
                            </Button>
                        </Col>
                        <Col xs={3} />
                    </Row>
                </Col>
            </Row>
        </Grid>
    </div>
)

export default Portfolio;