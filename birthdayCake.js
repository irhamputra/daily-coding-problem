function birthdayCake(arr){
  const max = Math.max(...arr);
  return arr.filter(i => i === max).length
}