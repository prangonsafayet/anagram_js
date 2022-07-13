const arr = [
  "rope",
  "pore",
  "repo",
  "silent",
  "listen",
  "murder",
  "red rum",
  "endevour",
];
let result = [];
let eachArr = [];
const sortAlphabets = function (text) { //remove spaces and sort the alphabets then join them again to see if they are anagrams or not
  return text.split("").sort().join("");
};
const valueExist = function (index) {  //checking if the value already exists in the child array
  for (let k = 0; k < index; k++) {
    if (
      sortAlphabets(arr[k].split(" ").join("")) ==
      sortAlphabets(arr[index].split(" ").join(""))
    ) {
      return true;
    }
  }
};

for (let i = 0; i < arr.length; i++) {
  if (i > 0) {
    if (valueExist(i)) { //if value exists in the child array skip the index, for i=0 it is not true because the first iteration there is nothing on the child array so count starts from i>0
      continue;
    }
  }
  eachArr = [];

  for (let j = 0; j < arr.length; j++) {  //iterate through input array if the value does not include in the child result array, and check if they are anagrams
    if (
      sortAlphabets(arr[i].split(" ").join("")) ==
      sortAlphabets(arr[j].split(" ").join(""))
    ) {
      eachArr.push(arr[j]); //if anagram push into the child array of result
    }
  }

  result.push(eachArr); //push the anagram on the corresponding child array
}
console.log(result);