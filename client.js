$(readyNow)

let employeeList = []; //initializing our employee list

function readyNow() {
    console.log('JQ');

    // Add click listener

$('#addEmployee').on('click', addEmployee);
    
}

// create a function to call to add an employee to the array and the DOM

function addEmployee () {
    console.log('Employee Added');
    // let fname = $('.fname').val();
    // console.log(fname);

    const employee = { // define an employee object
        fname: $('.fname').val(),
        lname: $('.lname').val(),
        idNum: $('.id-num').val(),
        title: $('.title').val(),
        salary: $('.salary').val(),
    }
    
    console.log(employee); 
    employeeList.push(employee); // add the employee to our list
    renderEmployee(); // call rendering function   

    // reset all inputs

    $('.fname').val('');
    $('.lname').val('');
    $('.idNum').val('');
    $('.title').val('');
    $('.salary').val('');

    
}

function renderEmployee(){
    // clear the DOM of employees
    $('#tableBody').empty();

    for (let employee of employeeList) {
        const tableRow =
        // define our row of table data to be appended.
        $(`<tr> 
            <td>${employee.fname}</td>
            <td>${employee.lname}</td>
            <td>${employee.idNum}</td>
            <td>${employee.title}</td>
            <td>${employee.salary}</td>
            <td><button class="delButton btn btn-danger">Delete</button><td>
            </tr>`)
        $('#tableBody').append(tableRow);
        
    }

}