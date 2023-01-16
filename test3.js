const test3Function = (arr) => {
  let n = arr.length;
  let pos = new Array(n);
  for (let i = 0; i < n; i++) {
    pos[arr[i]] = i;
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== i + 1) {
      let temp = arr[i];
      arr[i] = i + 1;
      arr[pos[i + 1]] = temp;
      pos[temp] = pos[i + 1];
      ans++;
    }
  }
  return ans;
};

const example1 = test3Function([7, 1, 3, 2, 4, 5, 6]);
const example2 = test3Function([2, 1, 3, 7, 4, 5, 6]);
const example3 = test3Function([1, 2, 3, 7, 4, 5, 6]);
const example4 = test3Function([1, 2, 3, 4, 7, 5, 6]);
const example5 = test3Function([1, 2, 3, 4, 5, 7, 6]);
const example6 = test3Function([1, 2, 3, 4, 5, 6, 7]);

console.log({
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
});
