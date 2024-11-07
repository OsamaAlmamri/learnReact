'use client';

import HeaderNav from "@/components/HeaderNav/HeaderNav";
import {useState} from "react";



function Hooks() {
    const [counter,setCounter] = useState<number>(0);

    function chnageCounter() {
        setCounter(counter+1) ;
    }
    return (
        <div className=" text-center items-center justify-center ">
            <HeaderNav/>

            <h1 className="text-center text-2xl"> {counter} </h1>

            <button className="btn border bg-primary py-2 w-56 " onClick={chnageCounter}> increase </button>
        </div>
    );
}

export default Hooks;
