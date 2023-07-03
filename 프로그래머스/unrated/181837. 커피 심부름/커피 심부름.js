const solution = (order) => {
  return order.reduce((acc, cur) => {
    return acc + (cur.includes("tte") ? 5000 : 4500);
  }, 0);
};