//Declaring a variable to get the class on the button in the html
var button = document.getElementsByClassName("button");

//Accesing an element in the array, and then assigning an onclick method and a function to the variable
button[0].onclick = handleClick;

//Creating a function that sends an alert everytime the function is called because we love alerts like Neelam!
function handleClick () {
  alert("We should drink rose");
};

function showDiv () {
  document.getElementById('surprise').style.display = "block";
}
