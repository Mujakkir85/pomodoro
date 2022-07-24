import React, { useRef, useState } from 'react';
import ShowA from './ShowA';
import ShowB from './ShowB';
import ShowBoth from './ShowBoth';
import ShowUnique from './ShowUnique';

const TaskOne = () => {

    const [isShown, setIsShow] = useState(false)

    const [ItemsA, setitemsA] = useState([]);

    const [ItemsB, setitemsB] = useState([]);

    const itemsARef = useRef(null);
    const itemsBRef = useRef(null);

    const handleA = () => {
        setitemsA([...ItemsA,
        itemsARef.current.value
        ])

        itemsARef.current.value = '';
    }

    const handleB = () => {

        setitemsB([...ItemsB,
        itemsBRef.current.value
        ])

        itemsBRef.current.value = '';
    }

    let [Both, setBoth] = useState([]);
    let [Unique, setUnique] = useState([]);


    const handleShow = () => {

        //console.log("itemA ", ItemsA);
        //console.log("itemB ", ItemsB);
        const differenceA = ItemsA.filter(item => !ItemsB.includes(item));
        const differenceB = ItemsB.filter(item => !ItemsA.includes(item));

        setBoth([...ItemsA, ...differenceB]);

        setUnique([...differenceA, ...differenceB]);

        setIsShow(isShown ? false : true);

    }

    return (
        <div>

            {/* INPUT */}
            <div className='flex justify-center pt-10'>
                <input ref={itemsARef} type="text" name="cycle" placeholder="Add item A" className="input input-bordered w-full max-w-xs " />

                <button className="btn bg-sky-500 mx-2 text-white text-xl" onClick={handleA} >Add A</button>

                <input ref={itemsBRef} type="text" name="cycle" placeholder="Add item B" className="input input-bordered w-full max-w-xs " />

                <button className="btn bg-sky-500 mx-2 text-white text-xl" onClick={handleB} >Add B</button>
            </div>

            {/* Show Items A and B */}
            <div className='flex justify-center'>
                <div className='grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-12 pt-10'>
                    <div className="card w-96 bg-teal-800 shadow-xl ">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Items A</h2>
                            <div className='text-xl'>
                                {ItemsA.map(data => <li>{data}</li>)}
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-emerald-700 shadow-xl ">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Items B</h2>
                            <div className='text-xl'>
                                {ItemsB.map(data => <li>{data}</li>)}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <button className="btn flex justify-center bg-sky-500 mx-auto mt-20 text-xl text-white " onClick={handleShow}>Compute</button>

            {/* Send Data */}
            <div className='flex justify-center'>
                {isShown && (
                    <div className='mt-10 px-12'>
                        <div className='grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-20 '>
                            <ShowA ItemsA={ItemsA}></ShowA>
                            <ShowB ItemsB={ItemsB}></ShowB>
                        </div>
                        <div className='grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-20 '>
                            <ShowBoth Both={Both}></ShowBoth>
                            <ShowUnique Unique={Unique}></ShowUnique>
                        </div>
                    </div>
                )}

            </div>


        </div>
    );
};

export default TaskOne;