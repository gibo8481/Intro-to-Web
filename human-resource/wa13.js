function print(n, obj){
    console.log(`Problem ${n}`, JSON.parse(JSON.stringify(obj)));
}
// Problem 1 - Create JSON for each employee
const employees = [
    { 
        firstName: "Sam", 
        department: "Tech", 
        designation: "Manager", 
        salary: 40000, 
        raiseEligible: true 
    },
    { 
        firstName: "Mary", 
        department: "Finance", 
        designation: "Trainee", 
        salary: 18500, 
        raiseEligible: true 
    },
    { 
        firstName: "Bill",
        department: "HR", 
        designation: "Executive", 
        salary: 21200, 
        raiseEligible: false 
    }
];
print(1, employees);

// Problem 2 - Create JSON for the company
var company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};
console.log(company);
// Problem 3 - A new employee has joined
const newEmployee = { firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false };
company.employees.push(newEmployee);
print(3, company);

// Problem 4
// Calculate total salary for all company employees
let total = 0;

company.employees.forEach(e => {
    total += e.salary;
});
print(4, total);

// Problem 5 - Update salary for eligible employees
function giveRaise(employees) {
    employees.forEach(e => {
        if (e.raiseEligible) {
            e.salary *= 1.1;
            e.raiseEligible = false;
        }
    });
    return employees
}

company.employees = giveRaise(company.employees);
print(5, company.employees);

// Problem 6 - Update employees working from home
const employeesWFH = ['Anna', 'Sam'];
company.employees.forEach(e => {
    if(e.wfh = employeesWFH.includes(e.firstName)){
        e.wfh = true;
    }
    else{
        e.wfh = false;
    }
   return employees; // employee.wfh = employeesWFH.includes(employee.firstName) ? true : false;
});
print(6, company.employees);