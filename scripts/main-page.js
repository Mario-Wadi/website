import { employees } from "../data/employees.js";
//Making loading screen disappear after the webpage is loaded
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });


let html = '';
let i = 0;

//Creating each employee and styling the bottom border with each one his color
employees.forEach((employee) =>{
    html+=`<div  class='employee-box${i} employee-box' style="border-bottom: 2vh solid ${employee.color};">
    <img src='${employee.photo}'>
    <div class='employee-name'>${employee.fName} ${employee.lName}</div>
    <div class='employee-company'>${employee.company}</div>
    </div>`;
    i++;
});

document.querySelector('.employees-container').innerHTML= html;

//Creating a list to store all the employee-box divs
let employeeBox = [];
for (let j=0 ; j<employees.length ; j++){
employeeBox[j] = document.querySelector(`.employee-box${j}`);}


//Function to switch the grid from 3 to 2 columns
function AdjustGrid(){
document.querySelector('.employees-container').classList.add('employees-container-detail');
 };

 //Switching the grid to 2 columns and inserting the details div when clicking a specific employee-box div
for (let k=0 ; k<employees.length ; k++){
employeeBox[k].addEventListener('click',()=>{
AdjustGrid();
html = `<div class="employee-details">
<button onclick="

    document.querySelector('.employees-container').classList.remove('employees-container-detail');
    document.querySelector('.employee-details').remove();

    " type="button" class="close js-close-button" aria-label="Close" style="margin-right:5px" >
  <span aria-hidden="true" >&times;</span>
</button>
<img src='${employees[k].photo}' class='details-img'>
<div class='details-employee-name'>${employees[k].fName} ${employees[k].lName}</div>
<div class='details-employee-company'>${employees[k].company}</div>
<div class='details-address-title'>Address:</div>
<div class='details-employee-address'>${employees[k].address}</div>
<div class='details-employee-city'>${employees[k].city}</div>
<div class='details-employee-county'>${employees[k].county}</div>
<button class="share-button">Share</button>
<button class="send-button">Send</button>
<button class="call-button">Call</button>
<button class="delete-button">Delete</button>
</div>
`;

//Adding the specific border color
document.querySelector('.employee-details-container').innerHTML = html;
const employeeDetails = document.querySelector('.employee-details');
employeeDetails.style.borderRight = `1rem solid ${employees[k].color}`;
employeeDetails.style.borderTop = `2px solid ${employees[k].color}`;
employeeDetails.style.borderBottom = `2px solid ${employees[k].color}`;
employeeDetails.style.borderLeft = `2px solid ${employees[k].color}`;
document.querySelector('.details-employee-name').style.color = `${employees[k].color}`;
$(".employee-details").slideDown(500);//Jquery animation
})
};





