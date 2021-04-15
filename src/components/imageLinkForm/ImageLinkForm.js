import React from 'react';
import './imageLinkForm.css';



const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f5'>
                {'Detect faces in your pictures. Just paste an image URL below.'}
            </p>
            <div className='center'>
                <div className='form center pa3 br3 shadow-5'>
                    <input 
                        className="f6 pa2 w-80 center" 
                        type="text" 
                        onChange={onInputChange}
                    />
                    <button 
                        className="w-20 grow f4 link ph1 dib white bg-green" 
                        onClick={onButtonSubmit} >
                            Detect
                    </button>
                </div>
            </div>
        </div>
    );
}


export default ImageLinkForm;