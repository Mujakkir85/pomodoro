import React from 'react';

const ShowBoth = ({ Both }) => {
    console.log(Both)
    return (
        <div className="card w-96 bg-stone-700 shadow-xl text-xl">
            <div className="card-body">
                <h2 className="card-title text-2xl">Items present in both A and B</h2>
                <div>
                    {Both?.map(data => <li>{data}</li>)}
                </div>
            </div>
        </div>
    );
};

export default ShowBoth;