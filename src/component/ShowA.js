import React from 'react';

const Show = ({ ItemsA }) => {

    console.log(ItemsA)
    return (
        <div className="card w-96 bg-green-800 shadow-xl">
            <div className="card-body ">
                <h2 className="card-title text-2xl">Items present only in A</h2>
                <div className='text-xl'>
                    {ItemsA.map(data => <li>{data}</li>)}
                </div>
            </div>
        </div>

    );
};

export default Show;