import React from 'react';
import '../Styling/Home.css';
import styled from 'styled-components';
import Stat__Comp from '../Components/Stat__Comp.js';
import Footer from '../Components/Footer.js';
function Home() {

const Line = styled.hr`
    background-color: #000;
    width: 100%;
    height: 1.5px;
    margin: 15px 0;

    // @media only screen and (max-width: 768px){
    //     width: 70%
    // }

    // @media only screen and (max-width: 480px){
    //     margin: 10% 0;
    // }
`;

    return (
        <>
        <div className='home'>
            <img className='home__hero__img' src='./Assets/home__hero.png' alt='' />
                
            <div className='home__content__wrapper'>
                <div className='content__container'>
                    <h1 className='hero__title'>HOME<br/>BUYING MADE<br/>EASY</h1>
                    <p>we are a real estate agency that will help you find and choose your modern and minimalistic dream home.</p>
                    <button onClick={() => window.location.replace("/#contact__section")} className='contact__button'>Contact Us</button>

                    <div className='home__stage__planner'>
                        <span className='stage__row'> <h5>STAGE</h5> <p>Planned for 2022</p> </span>
                        <Line />
                        <span className='stage__row'> <h5>001</h5> <p>Inquire about the property</p></span>
                        <Line />
                        <span className='stage__row'> <h5>002</h5> <p>Schedule a tour</p></span>
                        <Line />
                        <span className='stage__row'> <h5>003</h5> <p>Obtain aproval & submit offer</p></span>
                        <Line />
                        <span className='stage__row'> <h5>004</h5> <p>Enjoy your new home</p></span>
                        <Line />
                    </div>
                </div>
            </div>
        </div>
s
        <Stat__Comp />

        <div className='values__container'>
            <img className='home__values__img' src='./Assets/home__asset__1.png' alt='' />
            <div className='text__wrapper'>
                <p className='small'>OUR VALUE</p>
                <h2>Value we bring you</h2>
                <p>We area always ready to help by providing the best service for you. 
                   We believe a good place to live can make your life better.</p>

                   <span className='Perk_container'>
                       <p className='perk__item'>Lowest interest rates on the market</p>
                       <p className='perk__item'>Best price on the market guaranteed</p>
                       <p className='perk__item'>Tax advantages avilable</p>
                   </span>
            </div >
        </div>
        <span id="contact__section">
            <Footer />
        </span>
        </>
    )
}

export default Home
