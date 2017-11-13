const text = "Regular expressions are an" +
    " important part of working with strings in JavaScript, " ;

const REGEXP = /[aeuoiAEUIO]/gi;
let found = text.match(REGEXP);
console.log(found);
