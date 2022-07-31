console.log("Run");

let testCases = ["hallo", "abba", "heut", "aabb"];

const firstCharTwice = (str) => {
  let charMap = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charMap[char]) {
      return char;
    }
    charMap[char] = true;
  }
  return "";
};

testCases.forEach((testCase) => {
  console.log("Case: " + testCase);
  console.log("Result: " + firstCharTwice(testCase));
  console.log("Result: " + firstDuplicate(testCase) + "\n");
});

function firstDuplicate(a) {
  let data = [];

  for (dup of a) {
    if (data[dup]) {
      return dup;
    } else {
      data[dup] = dup;
    }
  }
  return -1;
}

let j = {};
j.name = "John";
j.age = ["s", "f"];
j.city = "New York";

console.log(j["age"]);
if (j["age"]) {
  console.log("hi exist");
}
//console.log(j["agea"]);
