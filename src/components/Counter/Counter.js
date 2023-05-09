import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store";


const Counter = () => {

    const count = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => dispatch(decrement)}>-</button>
            <button onClick={() => dispatch(increment)}>+</button>
            <button onClick={() => dispatch(reset)}>reset</button>
        </div>
    );

};
export default Counter;

// FOR TWO SEPARATED COUNTERS:
//
// import React from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { increment1, decrement1, reset1, increment2, decrement2, reset2 } from "./store";
//
//
// const Counter = () => {
//
//     const count1 = useSelector((state) => state.count1);
//     const count2 = useSelector((state) => state.count2);
//     const dispatch = useDispatch();
//
//     return (
//         <div>
//             <h2>Counter 1: {count1}</h2>
//             <button onClick={() => dispatch(decrement1())}>-</button>
//             <button onClick={() => dispatch(increment1())}>+</button>
//             <button onClick={() => dispatch(reset1())}>reset</button>
//             <h2>Counter 2: {count2}</h2>
//             <button onClick={() => dispatch(decrement2())}>-</button>
//             <button onClick={() => dispatch(increment2())}>+</button>
//             <button onClick={() => dispatch(reset2())}>reset</button>
//         </div>
//     );
//
// };
// export default Counter;
