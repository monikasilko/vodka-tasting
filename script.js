//Declaring a variable to get the class on the button in the html
var button = document.getElementsByClassName("button");

//Accesing an element in the array, and then assigning an onclick method and a function to the variable
button[0].onclick = handleClick;

//Creating a function that sends an alert everytime the function is called because we love alerts like Neelam!
function handleClick () {
  alert("We should drink rose");
};

//Function that gets the divs id and changes the style of it to display
function showDiv () {
  document.getElementById('surprise').style.display = "inline";
  document.getElementById('clear').style.display = "inline";
}

//Function that removes the div attached to a button that runs when clicked
function removeDiv () {
  document.getElementById('surprise').style.display = 'none';
  document.getElementById('clear').style.display = 'none';
}

//Function that displays a div and shows an item from an array thats selected at random. 
function displayMessage() {
  document.getElementById('messageBox').style.display = "inline";
  var sayings = ["I forgot my chicken!", "I'll make you regret", "Lets drink some work documents", "Its not my problem!"];

  var randomQuote = sayings[Math.floor(Math.random()*sayings.length)];

  var random = document.getElementById('selectedQuote').innerHTML = randomQuote;

}
