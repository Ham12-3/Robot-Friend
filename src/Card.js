import React from 'react';

const Card =({id, email,name}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shdow-5'>
            <img alt='' src={`https://robohash.org/${id}?200*200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;