import React from 'react'
import githubLogo from './GitHub-Mark-120px-plus.png'


const Footer = () => {
    return (
        <div>
        <footer className="pv4 ph3 ph5-m ph6-l black">
            <small className="f6 db tc">Made in Ehrenfeld.
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