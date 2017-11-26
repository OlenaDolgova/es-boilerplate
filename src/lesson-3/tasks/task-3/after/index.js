'use strict'
export {sum};

function sum () {
     sum.count = 0;
     const second = y => {
         sum.count += y;
         console.log(sum.count);
     }
     return second;
}

