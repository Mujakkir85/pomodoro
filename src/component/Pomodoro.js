import React, { useEffect, useRef, useState } from 'react';

const Pomodoro = () => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);

    const [cycle, setCycle] = useState(0);

    const cycleRef = useRef(0)

    const handleCycle = () => {
        setCycle(cycleRef.current.value);
        cycleRef.current.value = ''
    }

    useEffect(() => {

        if (cycle > 0) {

            let interval = setInterval(() => {
                clearInterval(interval);

                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    } else {
                        let minutes = displayMessage ? 24 : 4;
                        let seconds = 59;

                        setSeconds(seconds);
                        setMinutes(minutes);
                        setDisplayMessage(!displayMessage);
                        setCycle(cycle - 0.5);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        }
    }, [seconds, cycle]);


    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className="pomodoro">

            <div className='flex justify-center mt-16'>
                <input ref={cycleRef} type="number" name="cycle" placeholder="Add cycle" className="input input-bordered w-full max-w-xs " />
                <button className="btn bg-sky-500 mx-2 text-white text-xl" onClick={handleCycle} >Add Cycle</button>
            </div>

            <div className="message flex justify-center">
                {displayMessage && <div>Break time! New session starts in:</div>}
            </div>

            <div className="message flex justify-center">
                {cycle === 0 && <div>Add A New Cycle!</div>}
                {cycle > 0 && displayMessage === false && <div>Works Time</div>}
            </div>


            <div className="card w-full bg-sky-500 shadow-xl ms-10, pb-10">
                <div className="card-body">
                    <h2 className="card-title flex justify-center text-4xl">Pomodoro</h2>
                    <div className='flex justify-center'>
                        {timerMinutes}:{timerSeconds}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pomodoro;