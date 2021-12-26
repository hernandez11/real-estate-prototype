import React from 'react';
import '../Styling/Testimonials.css';
import styled from 'styled-components';
import Quotes from './Data.js';

function Testimonials() {

    const VerticalLine = styled.hr`
    background-color: #000;
    width: 2px;
    height: 10em;
    margin: 0 5%;

    @media screen and (max-width: 768px) {
        display: none;
    }

`;

    return (
        <div className='testimonials'>
            <div className='testimonials__container'>
            <h1>What Our Customers Say About Us</h1>

            <div className='quotes__wrapper'>
                <div className='testimonials__wrapper'>
                    <img src='./Assets/quote__icon.png' alt='' />
                    <p>{Quotes[0].title}</p>
                    <p className='quote'>{Quotes[0].quote}</p>
                    <img className='quote__image' src={Quotes[0].client__image} alt='' />
                </div>
                <VerticalLine />
                <div className='testimonials__wrapper'>
                    <img src='./Assets/quote__icon.png' alt='' />
                    <p>{Quotes[1].title}</p>
                    <p className='quote'>{Quotes[1].quote}</p>
                    <img className='quote__image' src={Quotes[1].client__image} alt='' />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Testimonials
