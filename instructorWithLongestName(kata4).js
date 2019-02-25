
function instructorWithLongestName(instructors) {
var nLength = [];

for (var i = 0; i < instructors.length; i++) {
  nLength.push(instructors[i]['name'].length)
  //console.log(nLength)
  }

  return (instructors[nLength.indexOf(Math.max(...nLength))]);
}
  
  
console.log (instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}]));
  

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}]));
