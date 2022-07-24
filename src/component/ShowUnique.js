import React from 'react';


const ShowUnique = ({ Unique }) => {
    return (

        <div className="card w-96 bg-sky-700 shadow-xl text-xl">
            <div className="card-body">
                <h2 className="card-title text-2xl">Items combining both A and B (unique)</h2>
                <div>
                    {Unique?.map(item => <li>{item}</li>)}
                </div>
            </div>
        </div>
    );
};

export default ShowUnique;