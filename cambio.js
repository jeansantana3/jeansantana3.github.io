// Get all the tabs and buttons
const tabs = document.querySelectorAll('.tab');
const buttons = document.querySelectorAll('.button-container a');

// Add event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and tabs
    buttons.forEach(button => button.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    // Add active class to the clicked button and corresponding tab
    const buttonTarget = button.getAttribute('href');
    const tabTarget = document.querySelector(buttonTarget);
    button.classList.add('active');
    tabTarget.classList.add('active');
  });
});

filterSelection("all"); // Execute the function and show all columns

function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("columna");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

