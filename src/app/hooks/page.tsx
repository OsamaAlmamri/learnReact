'use client';

import HeaderNav from "@/components/HeaderNav/HeaderNav";
import {useEffect, useRef, useState} from "react";


function Hooks() {
    const [counter, setCounter] = useState<number>(0);
    const [success, setSucess] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);
    function chnageCounter() {
        setCounter(counter + 1);
        if(counter==10)
        {
            setSucess(true);
        }
    }
    function focuseInput() {

        if(inputRef.current) {
            inputRef.current.focus();

        }
    }
 const changeInput=(e)=> {


           console.log( e.target.value);

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
            <div className="text-center text-xl">
                <input onChange={changeInput} ref={inputRef} />
                <button className="btn border bg-primary py-2 w-56 " onClick={focuseInput}> focuseInput</button>

            </div>
        </div>
    );
}

export default Hooks;
