const countYoungestAge = (people) => people.reduce((min, p) => p.age < min ? p.age : min, Infinity)
const countTotalSalary = (people) => people.reduce((total, p) => total + p.salary, 0)
const printAgeAndSalary = (youngest, totalSalary) => `youngestAge: ${youngest}, totalSalary: ${totalSalary}`

module.exports = {countYoungestAge, countTotalSalary, printAgeAndSalary}