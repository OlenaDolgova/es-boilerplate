
export default function func(arg1, delay, callback) {
        for ( let i = 0; i < arg1; i++) {
            setTimeout(function () {
                console.log(callback(i));
            },delay*i);
        }
    }

