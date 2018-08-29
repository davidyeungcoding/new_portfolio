import React from 'react';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import './Portfolio.css';

const Portfolio = () => (
    <div className='portfolioContainer'>
        <Grid>
            <Row>
                <Col className='portfolioHeader' xs={12}>
                    <h3 id='previousWorks' className='globalHeader'>
                        Previous Works
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col className='portfolioCard' xs={12} md={6}>
                    <Thumbnail className='portfolioThumbnail' href='http://www.beerpeersapp.com/' target='_blank' rel='noopener noreferrer' src={require('../../images/jefferson-santos-450403-unsplash.jpg')}>
                        <h3 className='globalHeader'>Beer Peers</h3>
                        <p className='globalText portfolioThumbDesc'>
                            Social media platform for brewers where they can come together and share recipes. Users will 
                            be able to create an account, post recipes, view and like recipes from other users, and follow 
                            their favorite brewers. Top recipes and brewers are tracked and posted in order based on number 
                            of followers or likes.
                        </p>
                    </Thumbnail>
                </Col>
                <Col className='portfolioCard' xs={12} md={6}>
                    <Thumbnail className='portfolioThumbnail' href='https://cookie-seller-app.herokuapp.com/' target='_blank' rel='noopener noreferrer' src={require('../../images/jefferson-santos-450403-unsplash.jpg')}>
                        <h3 className='globalHeader'>Cookie Finder</h3>
                        <p className='globalText portfolioThumbDesc'>
                            Designed for retailers, without a permanent location, to post what they have to offer, where 
                            they are located, and when they they will be available. Potential buyers can then go through 
                            the seller’s catalog and reserve their orders online.
                        </p>
                    </Thumbnail>
                </Col>
            </Row>
            <Row>
                <Col className='portfolioCard' xs={12} md={6}>
                    <Thumbnail className='portfolioThumbnail' href='https://americone-dream.github.io/Loiter/' target='_blank' rel='noopener noreferrer' src={require('../../images/Loiter.jpg')}>
                        <h3 className='globalHeader'>Loiter</h3>
                        <p className='globalText portfolioThumbDesc'>
                            Concept behind this project was to find locations nearby for users to hangout before or after 
                            an event.
                        </p>
                    </Thumbnail>
                </Col>
                <Col className='portfolioCard' xs={12} md={6}>
                    <Thumbnail className='portfolioThumbnail' href='https://davidyeungcoding.github.io/Crystal-Collector/' target='_blank' rel='noopener noreferrer' src={require('../../images/crystal_collector.jpg')}>
                        <h3 className='globalHeader'>Crystal Collector</h3>
                        <p className='globalText portfolioThumbDesc'>
                            A simple game built using Javascript, HTML, and CSS. You are given a target number and four 
                            buttons with hidden values associated with each. The total displayed will keep a running tally
                            as you click on each button until you match or go over the target.
                        </p>
                    </Thumbnail>
                </Col>
            </Row>
        </Grid>
    </div>
)

export default Portfolio;