export {findString};
function findString(text, pattern) {
    // let arr; //first variant
    // let count = 0;
    // let p=new RegExp(pattern,'g');
    // console.log(p.flags);
    // while ((arr = p.exec(text)) != null) {
    //     count++;
    //     console.log(arr.index + ' - ' + p.lastIndex + ' ');
    //     console.log(arr);
    // }
    // return count;

// Second variant
    let count =0;

    for (let i = 0; i <= text.length; i++) {
        pattern.lastIndex =i;
        if (  pattern.exec(text) != null ) {
         count = count+1;
        }
    }
    return count;
}
