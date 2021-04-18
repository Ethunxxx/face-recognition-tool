import React from 'react'
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {

    const boxElements = []

    console.log(boxes)

    if (boxes.leftCols) {
        for (let idx = 0; idx < boxes.leftCols.length; idx++) {
            boxElements.push(
                <div
                    key={idx}
                    className="bounding-box"
                    style={{
                        top: boxes.topRows[idx],
                        right: boxes.rightCols[idx],
                        bottom: boxes.bottomRows[idx],
                        left: boxes.leftCols[idx]
                    }}>
                </div>
            )
        }
    }

    return (
        <div className="center" >
            <div className="absolute mt4">
                <img
                    id="inputImage"
                    alt=""
                    src={imageUrl}
                    className="shadow-5"
                />
                <div>
                    {boxElements}
                </div>
            </div>
        </div>
    );
}


export default FaceRecognition;