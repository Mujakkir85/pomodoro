import React from 'react';

const ShowB = ({ ItemsB }) => {
    console.log(ItemsB)
    return (
        <div className="card w-96 bg-orange-900 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-2xl">Items present only in B</h2>
                <div className='text-xl'>
                    {ItemsB.map(data => <li>{data}</li>)}
                </div>
            </div>
        </div>
    );
};

export default ShowB;