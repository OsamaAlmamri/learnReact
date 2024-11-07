'use client';

import HeaderNav from "@/components/HeaderNav/HeaderNav";
import {useEffect, useState} from "react";


function Hooks() {
    const [counter, setCounter] = useState<number>(0);
    const [success, setSucess] = useState<boolean>(false);

    function chnageCounter() {
        setCounter(counter + 1);
        if(counter==10)
        {
            setSucess(true);
        }
    }

    // useEffect(() => {
    // console.log('this effect will call each time page change')
    // });
    //
    // useEffect(() => {
    // console.log('this effect will call one time ')
    // },[]);
    //
    // useEffect(() => {
    // console.log('this effect will call one counter  change ')
    // },[counter]);

    useEffect(() => {
    console.log('this effect will call one counter ===10   ')
    },[success]);

    // useEffect(() => {
    // console.log('this effect will call counter or success are change    ')
    // },[success,counter]);

    return (
        <div className=" text-center items-center justify-center ">
            <HeaderNav/>

            <h1 className="text-center text-2xl"> {counter} </h1>

            <button className="btn border bg-primary py-2 w-56 " onClick={chnageCounter}> increase</button>
        </div>
    );
}

export default Hooks;
