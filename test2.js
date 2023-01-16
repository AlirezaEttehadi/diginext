const test2Function = (str) => {
  let deletions = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (
      !(
        (str[i] === "A" && str[i + 1] === "B") ||
        (str[i] === "B" && str[i + 1] === "A")
      )
    ) {
      deletions++;
    }
  }
  return deletions;
};

const example1 = test2Function("AAAA");
const example2 = test2Function("BBBBB");
const example3 = test2Function("ABABABAB");
const example4 = test2Function("BABABA");
const example5 = test2Function("AAABBB");

console.log({
  example1,
  example2,
  example3,
  example4,
  example5,
});
