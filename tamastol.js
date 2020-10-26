const generateArray = (n) => {
  const arr = [];
  for (i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 10 + 10));
  }
  return arr;
};
const tomb = generateArray(10);

