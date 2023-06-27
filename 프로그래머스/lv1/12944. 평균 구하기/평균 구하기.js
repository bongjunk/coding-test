const solution = (arr) => {
  const sum = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
    
  return sum / arr.length;
}