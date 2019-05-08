function diagonalDiff(arr){
  let n = arr.length;
  let diag1 = 0;
  let diag 2 = 0;

  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      if(i === j){
        diag1 += arr[i][j]
      }

      if(i + j === n -1){
        diag2 += arr[i][j]
      }
    }
  }

  return Math.abs(diag1 - diag2);
}