import React from 'react';
import './imageLinkForm.css';



const ImageLinkForm = ({ onInputChange, onButtonSubmit, onButtonClear, userInput }) => {

    const onPressEnter = (event) => {
        if (event.code === "Enter") {
            // console.log('submitted via enter')
            onButtonSubmit();
        }
    }



    return (
        <div>
            <p className='f5'>
                {'Detect faces in your pictures. Just paste an image URL below.'}
            </p>
            <div className='center'>
                <div className='form center pa3 br3 shadow-5'>
                    <input
                        className="f6 pa2 w-75 center"
                        type="text"
                        onChange={onInputChange}
                        value={userInput}
                        onKeyPress={onPressEnter}
                    />
                    <button
                        className="w-20 br1 bw0 my-grow f4 link ph1 ml1 dib white bg-green"
                        onClick={onButtonSubmit}
                    >
                        Detect
                    </button>
                    <button
                        className="w-5 br1 my-grow-h f4 link ph2 ml1 white dib bg-light-red bw0"
                        onClick={onButtonClear}
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    );
}


export default ImageLinkForm;