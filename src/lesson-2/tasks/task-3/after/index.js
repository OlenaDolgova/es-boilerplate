'use strict'

export {format};

function format(func) {
    const first = func.charCodeAt(0).toString(16);
    const second = func.charCodeAt(1).toString(16);

    return `\\u${first}\\u${second}`;
}
