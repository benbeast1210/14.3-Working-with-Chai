/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/

function findStudentScoreByName(students, name) {
  for (let student in students) {
    if (students[student].name === name) {
      return students[student].score
    }
  }
  return null;
}

module.exports = { findStudentScoreByName };
