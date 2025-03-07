$(readyNow)

let employeeList = []; //initializing our employee list

function readyNow() {
    console.log('JQ');

    // Add click listener

    $('#addEmployee').on('click', addEmployee);
    $('#tableBody').on('click', '.delButton', deleteEmployee);
} 

// create a function to call to add an employee to the array and the DOM

function addEmployee () {
    // console.log('Employee Added');
    // let fname = $('.fname').val();
    // console.log(fname);

    const employee = { // define an employee object and insert input fields
        fname: $('.fname').val(),
        lname: $('.lname').val(),
        idNum: $('.id-num').val(),
        title: $('.title').val(),
        salary: $('.salary').val(),
    }    
    // check for blank values
    if (!employee.fname || !employee.lname || !employee.idNum || !employee.title || !employee.salary) {
        let el = $('#errorMessage');
        el.empty(); // emptying the errorMessage so errors don't concatenate
        el.append('Please complete all fields!'); // Add the error text in the span beside the button
        inputReset(); //                           
        return false; // returning to end the function
    } // end conditional check for inputs
    // console.log(employee); 
    employeeList.push(employee); // add the employee to our list
    renderEmployee(); // call rendering function   
    inputReset(); // reset all inputs
} // end addEmployee

// create function to reset inputs

function inputReset () {
    $('.fname').val('');
    $('.lname').val('');
    $('.id-num').val('');
    $('.title').val('');
    $('.salary').val('');
}

// create function to remove an employee from the DOM 

function deleteEmployee() {
    console.log('Delete Button Activate!');
    console.log(this);
    // $(this).closest('tr').remove();
    // grabbing the index of the employee to delete, via the button id attribute 
    let deleteIndex = $(this).attr('id')[8];
    console.log(deleteIndex);
    // splice out the employee to be deleted from employeeList
    employeeList.splice(deleteIndex, 1);
    // re-render the DOM outputs    
    renderEmployee();
}

function renderEmployee(){
    // clear the DOM of employees
    $('#tableBody').empty();
    // initialize a total salary variable
    let totalAnnual = 0;
    for (let i = 0; i < employeeList.length; i++) {
        const tableRow =
        // define our row of table data to be appended.
        $(`<tr> 
            <td>${employeeList[i].fname}</td>
            <td>${employeeList[i].lname}</td>
            <td>${employeeList[i].idNum}</td>
            <td>${employeeList[i].title}</td>
            <td>${formatCurrency(employeeList[i].salary)}</td>
            <td><button id="buttonID${i}" class="delButton btn btn-danger">Delete</button><td>
            </tr>`)
        $('#tableBody').prepend(tableRow);
        // add salary to total
        totalAnnual += Number(employeeList[i].salary);
    }
    console.log('Total annual salary is ', totalAnnual); 
    // edit the monthly salary
    // $('#salaryLine').empty(); // empty the current value
    let totalMonthly = totalAnnual/12; // calculate monthly value from annual
    let salaryText = $(`
    <span>Total Monthly: ${formatCurrency(totalMonthly)}
    </span>`)
    $('.calc').empty();
    $('.calc').append(salaryText);
    if (totalMonthly > 20000) {
        salaryText.addClass('red-ink');
    }
 } // end of renderEmployee
    
// creating a quick function to convert a number to currency format

function formatCurrency(number) {
    return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    }).format(number);
}


      
