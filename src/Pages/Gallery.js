import React from 'react'
import '../Styling/Gallery.css';
import Album from '../Components/Album.js';

function Gallery() {
    return (
        <div className='gallery'>
            <div className='hero__top'>
                <h1>PREMIUM HOMES</h1>
                <span className='hero__text__wrapper'>
                    <p>Our company is dedicated to innovating the luxury real estate industry. We offer new experiences through a global network of exceptional agents.</p><br/>
                    <p>With a network of homes for sale worldwide, our team helps you find the right home for you in the location of your choice.</p>
                </span>
            </div>
            <div className='gallery__imgs'>
                <img className='main__img' src='./Assets/gallery__hero__main.jpg' alt='' />
                <div className='album__assets__container'> <Album /> </div>
            </div>
        </div>
    )
}

export default Gallery
