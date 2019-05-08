function sockMerchant(n, arr){
  let sorted = arr.sort((a, b) => a - b);
  let pairs = 0;
  
  for(let i = 0; i < arr.length; i++){
    if(sorted[i] === sorted[i + 1]){
      pairs++
      i += 1
    }
  }

  return pairs
}