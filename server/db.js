const characters = require('./mocks/hp-characters.json');
const gryffindor = require('./mocks/hp-gryffindor.json');
const staff = require('./mocks/hp-staff.json');
const students = require('./mocks/hp-students.json');


module.exports = function () {
  return {
    characters: characters,
    gryffindor: gryffindor,
    staff: staff,
    students: students,
    // and so on
  }
}