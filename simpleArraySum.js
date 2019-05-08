function simpleArrSum(arr) {
  let reducers = (a, b) => a + b;
  return arr.reduce(reducers, 0) // start from =
}