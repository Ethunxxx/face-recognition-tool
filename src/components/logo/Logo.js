import React from 'react';
import Tilty from 'react-tilty';
import brain from './brain.png';
import './Logo.css';



const Logo = () => { 
    return (
        <div className="mb5">
            <div className="center">
                <Tilty className="gradient br2 shadow-2 pa3 mb0" style={{ transformStyle: 'preserve-3d', height: '120px', width: '120px' }}>
                    <img src={brain} alt="brain logo" style={{transform: 'translateZ(30px)'}}></img>
                </Tilty>
            </div>
            <div>
                <p className="f3 fw6">Richard's AI Face Recognition Tool</p>
            </div>
        </div>
    );
}


export default Logo;