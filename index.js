// Code your solution in this file!
const func = function () {
  console.log("wlc");
};

function returnFirstTwoDrivers(e) {
  return e[0] + e[1];
}
returnFirstTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]);
// => ['Antonia', 'Nuru']~

function returnFirstTwoDrivers(e) {
  return e[2] + e[3];
}
returnFirstTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]);
// => ['Amari', 'Mo']~
