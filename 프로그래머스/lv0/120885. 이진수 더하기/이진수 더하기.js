const solution = (bin1, bin2) => {
  const bin10 = parseInt(bin1, 2) + parseInt(bin2, 2);
  return bin10.toString(2);
};
