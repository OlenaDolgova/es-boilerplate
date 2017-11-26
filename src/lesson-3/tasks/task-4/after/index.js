"use strict";
export function Timer (){
    let secondsBox;
    let intervalId;

    const getTime = () => ({
        minutes: Math.floor(secondsBox / 60),
        seconds: secondsBox % 60
    });

    const init = (num, cb) => {
        if (typeof num !== 'number'){
            throw new Error("Type some number");
        }
        if (typeof cb !== 'function'){
            throw new Error("Callback should be a function");
        }
        secondsBox = num;
        cb ();
    };

    const start = (num, cb) => {
        if (typeof num !== 'number'){
            throw new Error("Type some number");
        }
        if (typeof cb !== 'function'){
            throw new Error("Callback should be a function");
        }
        cb (getTime());
        intervalId = setInterval(()=>{
            secondsBox = secondsBox + 1 / num;
            console.log(secondsBox);
        },1000/num ) // очитать про сеттаймаут и сет интервал и как их очищать. колбек функции
    };

    const pause = (cb) => {
        if (typeof cb !== 'function'){
            throw new Error("Callback should be a function");
        }
        clearInterval(intervalId);
        cb (getTime());
    };

    const stop = (cb) => {
        if (typeof cb !== 'function'){
            throw new Error("Callback should be a function");
        }
        clearInterval(intervalId);
        cb (getTime());
    };

    return {
        init,
        start,
        pause,
        stop
    }
}
