const solution = (cards1, cards2, goal) => {
  let card1 = 0;
  let card2 = 0;
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[card1]) card1++;
    else if (goal[i] === cards2[card2]) card2++;
    else return 'No'
  }
  return 'Yes'
};
