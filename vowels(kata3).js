let numberOfVowels = function(data) {
  // Put your solution here
  let listOfV = ['a','e','i','o','u']
  vCounter = 0

  for ( var i = 0; i < data.length; i++) {
    if (listOfV.includes(data.charAt(i))){
    vCounter ++}
  }
  return vCounter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("happy to see you made it"));
