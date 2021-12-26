import React from 'react';
import '../Styling/Stat__Comp.css';

function Stat__Comp() {
    return (
        <div className='stat__comp'>
            <span className='collumn__wrapper'>
                <span className='stat__column'>
                    <h2>100%</h2>
                    <p>Satisfaction<br/>Rate</p>
                </span>
                <span className='stat__column'>
                    <h2>407</h2>
                    <p>Properties<br/>Sold</p>
                </span>
            </span>
            <span className='collumn__wrapper'>
                <span className='stat__column'>
                    <h2>800+</h2>
                    <p>Customers<br/>Happy</p>
                </span>
                <span className='stat__column'>
                    <h2>20</h2>
                    <p>Awards<br/>Earned</p>
                </span>
            </span>

        </div>
    )
}

export default Stat__Comp
