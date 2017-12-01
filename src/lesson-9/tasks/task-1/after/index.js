'use strict'

export class Timer {
    constructor (){
        this.seconds = 0;
        this.intervalId = 0;
        this.speed = 0;
    }
    _getTime (){
        return {
            minutes: Math.round(this.seconds/60) ,
            seconds: this.seconds % 60,
        }
    }

    _setInterval (callback){
        this.intervalId = setInterval(() => {
            this.seconds += 1/this.speed;
            callback(this._getTime())
        }, 1000/this.speed);
    }

    init (seconds, callback){
        this.seconds = seconds;
        callback();
    }

    start (speed, callback){
        this.speed = speed;
        callback(this._getTime());
        this._setInterval(callback);
    }

    pause (callback){
        clearInterval(this.intervalId);
        callback(this._getTime());
    }

    stop (callback){
        clearInterval(this.intervalId);
        callback(this._getTime());
    }
}
