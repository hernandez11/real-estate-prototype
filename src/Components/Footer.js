import React from 'react';
import '../Styling/Footer.css';

function Footer() {

    return (
        <div className='footer'>
            <div className='footer__start'>
                <p>Say hi to the team</p>
                <h1>Contact Us</h1>
                <span className='form__container'>
                    <p>Feel free to contact us and we will get back to you as soon as we can.</p>
                    <form className='form__wrapper'>
                        <label>Name</label>
                        <input className='form__item' type='text' name='name' required/>
                        <label>Email Address</label>
                        <input className='form__item' type='text' name='name' required/>
                        <label>Tell us all about it</label>
                        <input className='form__item' type='text' name='name' required/>
                        
                        <button className='form__btn'>Send</button>
                        
                    </form>

                </span>
            </div>
            <div className='footer__end'>
                <div className='end__container'>
                    <p className='end__title'>Opening Hours</p>
                    <p>Monday - Friday</p>
                    <p>9am - 5pm</p>
                    <p>Weekend</p>
                    <p>Closed</p>
                <p></p>
                </div>
                <div className='end__container'>
                    <p className='end__title'>Address</p>
                    <p>783 Collins Drive</p>
                    <p>Bilzen, USA</p>
                    <p>89936-0586</p>
                </div>
                <div className='end__container'>
                    <p className='end__title'>Support</p>
                    <p>Info@realestate.com</p>
                    <p>+1 (123)123-1234</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
