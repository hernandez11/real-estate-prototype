import React, { useState } from 'react';
import '../Styling/Album.css';
import styled from 'styled-components';
import Assets from './Album__assets.js';

function Album() {
    const [ current, setCurrent ] = useState(Assets[0])
    const [ active, setActive ] = useState(0)

    const handleSetClicked = (event) => {
        setCurrent(Assets[event.target.getAttribute('data-asset')])
        setActive(event.target.getAttribute('data-asset'))
    }

    const Selector = styled.span`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20px;
        width: 20px;
        margin: 0 3px;
        cursor: pointer;
    
        &::before {
            content: ' ';
            height: 10px;
            width: 10px;
            background-color: #d4d4d4;
            border-radius: 50%;
            transition: background-color 0.3s ease;
        }

        :hover::before {
            background-color: #45454d;
        }

        &[data-asset="${active}"]::before {
            background-color: #45454d;
        }
    `;

    return (
        <div>
            <div className='album'>
                <img className='album__img' src={current.image} alt='' />
                <div className='album__selector'>
                    {Object.keys(Assets).map(index => (
                        <Selector
                            onClick={event => handleSetClicked(event)}
                            data-asset={index}
                            key={index}
                        />
                    ))}
                </div> 
            </div>
        </div>
    )
}

export default Album
