// Write your tests here!
const expect = require("chai").expect;
const { findStudentScoreByName } = require("/workspace/node/src/solution.js");


describe("findStudentScoreByName", () => {
  it("should return the score of the correct student, according to the 'name' input", () => {
    const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];
    const actual = findStudentScoreByName(students, "Natalee Vargas")
    const expected = 9.2
    expect(actual).to.equal(expected);
  });
  it("should return null if the 'name' cannot be matched within the 'students' array", () => {
    const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];
  const expected = null;
  const actual = findStudentScoreByName(students, "Terry Peters");
  expect(actual).to.equal(expected);          
  });
});