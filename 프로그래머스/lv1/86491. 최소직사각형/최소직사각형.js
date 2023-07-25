const solution = (sizes) => {
  let widthArr = [];
  let heightArr = [];

  sizes.forEach((el) => {
    el.sort((a, b) => b - a);
    const [width, height] = el;
    widthArr.push(width);
    heightArr.push(height);
  });
    
  return Math.max(...widthArr) * Math.max(...heightArr);
};