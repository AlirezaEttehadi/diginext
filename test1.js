const test1Function = (string, number) => {
  let newString = "";
  while (newString.length < number) {
    newString += string;
  }
  const finalString = newString.substring(0, number);

  return finalString.split("a").length - 1;
};

const example = test1Function("aba", 10);

console.log(example);
