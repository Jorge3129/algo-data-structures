function foo(people) {
    let youngest = people[0] ? people[0].age : Infinity;
    let totalSalary = 0;
    for (const p of people) {
        if (p.age < youngest) youngest = p.age;
        totalSalary += p.salary;
    }

    return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}

const countYoungestAge = (people) => people.reduce((min, p) => p.age < min ? p.age : min, Infinity)
const countTotalSalary = (people) => people.reduce((total, p) => total + p.salary, 0)