import React from 'react';
import './imageLinkForm.css';



const ImageLinkForm = () => {
    return (
        <div>
            <p className='f4'>
                {'Detect faces in your pictures. Just paste an image URL below.'}
            </p>
            <div className='center'>
                <div className='form center pa3 br3 shadow-5'>
                    <input className="f6 pa2 w-70 center" type="text" />
                    <button className="w-30 grow f5 link ph3 pv2 dib white bg-green">Detect</  button>
                </div>
            </div>
        </div>
    );
}


export default ImageLinkForm;