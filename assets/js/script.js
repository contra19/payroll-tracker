 // Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Array to store employee objects, will remain static outside loop until page refreshes
let employees = []; 


// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects  
  // Loop to collect information for multiple employees
    while (true) {
        let firstName = prompt("Enter employee's first name:");
        // If user clicks cancel, exit the loop
        if (firstName === null) {
            break;
        }

        // Make sure that first letter in firstName is capital
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);        
        
        let lastName = prompt("Enter employee's last name:");
        // If user clicks cancel, exit the loop
        if (lastName === null) {
            break;
        }

        // Make sure that first letter in lastName is capital
        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

        let salaryInput = prompt("Enter employee's salary:");
        // If user clicks cancel, exit the loop
        if (salaryInput === null) {
            break;
        }

        // Convert salary to 0 or default to 0 if not a valid number
        let salary = !isNaN(parseFloat(salaryInput)) ? parseFloat(salaryInput) : 0;

        // Create employee object if first name or last name are not blank
        if (firstName.trim() !== "" || lastName.trim() !== "") {
          let employee = {
              firstName: firstName.trim(),
              lastName: lastName.trim(),
              salary: salary
          };
          
          // Add employee obnject to employee array
          employees.push(employee);
      }

        // Prompt user to finish or continue
        let continueInput = window.confirm("Click 'OK' to add another employee or click 'Cancel' to finish?");
        // If user clicks cancel, exit the loop
        if (continueInput === false) {
          break;
        } 
    }


    // Return array of employee objects
    return employees; 
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // Get salaries and put in to an array
  const salaries = employeesArray.map(employee => employee.salary);

  // Calculate the average salary
  const total_salary = salaries.reduce((a_salary, salary) => a_salary + salary, 0);
  const average_salary = total_salary / salaries.length;

  // Log the average salary in the console
  console.log(`The average employee salary between our ${salaries.length} employees is $${average_salary.toFixed(2)}.`)
};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  // Get random employee name from employeesArray
  winner = employeesArray[(Math.floor(Math.random() * employeesArray.length))]; 
  
  // Display winner text in the console
  console.log(`Congratulation to ${winner.firstName} ${winner.lastName} our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  //console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
