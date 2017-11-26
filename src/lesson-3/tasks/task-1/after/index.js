'use strict';
export default function (l=10, d=1000, cb = (val) => val) {

if (typeof cb  !== 'function'){
    throw new Error ('Some text');
}
if (typeof  l !== 'number'|| typeof  d !== 'number') {
    throw new Error('Type a number');
}
for (var i=0; i < l; i++){
    ((item)=> setTimeout(() => console.log(cb(item)), d*i))(i); //форма записи самовызывающейся функции - почитать IIF
    }
}
