import { useState } from "react";

const CountComponent = () => {
    const [count, setCount] = useState(0);

    const PlusClickEvent = () => {
        setCount(count + 1);
    };

    const MinusClickEvent = () => {
        setCount(count - 1);
    };


    return (
        <>
        <div>
            <h1>카운트 하기</h1>
            <div>
                <button onClick={PlusClickEvent}>+</button>
                <div>{count}</div>
                <button onClick={MinusClickEvent}>-</button>
            </div>
        </div>
        </>
    );
};

export default CountComponent;