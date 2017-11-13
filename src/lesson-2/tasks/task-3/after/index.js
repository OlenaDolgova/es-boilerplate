
export {format};
function format(func) {
    let lead = func.codePointAt(0);

    function toUTF16(codePoint) {
        var TEN_BITS = parseInt('1111111111', 2);
        function u(codeUnit) {
            return '\\u'+codeUnit.toString(16).toLowerCase();
        }

        if (codePoint <= 0xFFFF) {
            return u(codePoint);
        }
        codePoint -= 0x10000;

                var leadSurrogate = 0xD800 + (codePoint >> 10);

                var tailSurrogate = 0xDC00 + (codePoint & TEN_BITS);

        return u(leadSurrogate) + u(tailSurrogate);
    }
    // console.log(lead);
    // console.log (String.fromCodePoint(lead));
    console.log(toUTF16(lead));
  }
