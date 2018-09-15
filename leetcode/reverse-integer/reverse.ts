const reverseInteger = n => {
  let result = Number(String(Math.abs(n)).split('').reverse().join(''));
  if (result > 0x7FFFFFFF) { // 0x7FFFFFFF => Math.pow(2,31) - 1
    return 0;
  }
  return n < 0 ? -result : result;
}

export {
  reverseInteger,
}
