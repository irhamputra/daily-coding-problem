function miniMaxSum(arr){
  let data = arr.sort();
  const sum = data.reduce((a, b) => a + b, 0);
  console.log(sum - data[data.length - 1], sum - data[0])
}