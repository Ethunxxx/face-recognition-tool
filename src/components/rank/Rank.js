import React from 'react';



const Rank = ({ userName, userEntries}) => {
    return (
        <div>
            <div className='f4'>
                {`Hello ${userName}! Your current entry count is:`}
            </div>
            <div className='f2'>
                {`${userEntries}`}
            </div>
        </div>
    );
}


export default Rank;