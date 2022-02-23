const MAX_LIMIT = 90; //Z
const MIN_LIMIT = 65; //A
const SHIFT_VALUE = 13; //rot13

function doTheShift(num) {
  if (num >= 65 && num <= 77) {
    return MAX_LIMIT - (SHIFT_VALUE - (num - (MIN_LIMIT - 1)));
  } else {
    return num - SHIFT_VALUE;
  }
}

function rot13(str) {
  let regexAlpha = /[A-Z]/;
  let x = str.split("");
  let y = x.map((item) => {
    return regexAlpha.test(item)
      ? String.fromCharCode(doTheShift(item.charCodeAt(0)))
      : item;
  });
  return y.join("");
}

module.exports = rot13;
