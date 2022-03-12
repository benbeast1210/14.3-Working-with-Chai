const fs = require("fs");
const path = require("path");
const { expect } = require("chai");
const findStudentScoreByName = require("../src/solution");

describe("findStudentScoreByName()", () => {
  it("should return the select student's score when a correct name is given", () => {
    const students = [
      { name: "Thomas Wimmer", score: 8.4 },
      { name: "Paula Pregl", score: 9.8 },
      { name: "Maja Renner", score: 7.3 },
    ];
    const actual = findStudentScoreByName(students, "Paula Pregl");
    const expected = 9.8;
    expect(actual).to.equal(expected);
  });

  it("should return null if the name does not match", () => {
    const students = [
      { name: "Thomas Wimmer", score: 8.4 },
      { name: "Paula Pregl", score: 9.8 },
      { name: "Maja Renner", score: 7.3 },
    ];
    const actual = findStudentScoreByName(students, "Marvin Zippe");
    const expected = null;
    expect(actual).to.equal(expected);
  });
});

const solutionTestsFilePath = path.join(__dirname, "solution.test.js");
const solutionTestContent = fs.readFileSync(solutionTestsFilePath, "utf-8");

describe("solution.test.js", () => {
  it("should require chai", () => {
    expect(solutionTestContent).to.include("chai");
  });

  it("should use the expect syntax", () => {
    expect(solutionTestContent).to.include("expect");
  });

  it("should use the describe syntax", () => {
    expect(solutionTestContent).to.include("describe");
  });

  it("should use the it syntax", () => {
    expect(solutionTestContent).to.include("it");
  });

  it("should use the it syntax", () => {
    expect(solutionTestContent).to.include("to");
  });
});
