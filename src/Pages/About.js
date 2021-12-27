import React from 'react';
import '../Styling/About.css';
import Footer from '../Components/Footer.js';
import Testimonials from '../Components/Testimonials.js';

function About() {
    return (
        <>
        <div className='hero__top'>
            <h1>ABOUT US</h1>
            <span className='hero__text__wrapper'>
                <p>We are a real estate agency that will help you find and choose your modern and minimalistic dream home. We provide a complete service for the sale, purchase or rental of real estate.</p>
            </span>
        </div>
        <img className='about__hero__img' src='./Assets/about__hero.png' alt=''/>
        <Testimonials />
        <div className='about__gallery'>
            <img className='gallery__img' src='./Assets/About__gallery__asset00.jpg' alt=''/>
            <img className='gallery__img' src='./Assets/About__gallery__asset01.jpg' alt=''/>
            <img className='gallery__img' src='./Assets/About__gallery__asset02.jpg' alt=''/>
        </div>
        <Footer />
        </>
    )
}

export default About
