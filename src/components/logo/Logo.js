import React from 'react';
import Tilty from 'react-tilty';
import brain from './brain.png';
import './Logo.css';



const Logo = () => {
    return (
        <div className="center ma4 mt0">
            <Tilty className="Tilty br2 shadow-2 pa3" style={{ transformStyle: 'preserve-3d', height: '150px', width: '150px' }}>
                <img src={brain} alt="brain logo" style={{transform: 'translateZ(30px)'}}></img>
            </Tilty>
        </div>
    );
}


export default Logo;