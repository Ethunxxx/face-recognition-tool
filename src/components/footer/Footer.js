import React from 'react'
import githubLogo from './GitHub-Mark-120px-plus.png'


const Footer = () => {
    return (
        // <nav style={{position: 'absolute',
        //     left:0,
        //     bottom:0,
        //     right:0,
        //     display: 'flex', justifyContent: 'flex-end'}}>
        // <footer 
        //     className=''    
        // >
        // <p 
        //     className='f6 black pt3 tc'>
        //         Made in Cologne Ehrenfeld.
        // </p>
        // </footer>
        // </nav>
        <div>
        <footer class="pv4 ph3 ph5-m ph6-l black">
            <small class="f6 db tc">Made in Ehrenfeld.
            <a className="db dim mt1" href="https://github.com/Ethunxxx/face-recognition-tool">
                <img 
                    alt="Github logo" 
                    src={githubLogo}
                    width='20px'></img>
            </a></small>
        </footer>
        </div>
    )
}


export default Footer;