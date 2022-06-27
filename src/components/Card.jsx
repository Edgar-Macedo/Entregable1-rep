import React from 'react';

const Card = ({children = null}) => {
    return (
        <div className='phraseContainer'>
            {children}
        </div>
    );
};

export default Card;