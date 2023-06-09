import React from 'react';
import {useDispatch} from "react-redux";
import {resetToDefault} from "./redux/todo.slice";

const ResetApp = () => {
    const dispatch = useDispatch();


    return (
        <div>
            <button onClick={() => dispatch(resetToDefault())}>Reset</button>
        </div>
    );
};

export default ResetApp;