// Select the element or document on which you want to track the mouse pointer
var targetElement = document;
var xaxis = document.getElementById('xaxis');
var yaxis = document.getElementById('yaxis'); // Change this to the element you want to track

// Add a mousemove event listener to the target element
targetElement.addEventListener('mousemove', handleMouseMove);

// Mousemove event handler
function handleMouseMove(event) {
  // Get the current coordinates of the mouse pointer
var mouseX = event.clientX;
var mouseY = event.clientY;


xaxis.innerHTML = mouseX + 'px';
yaxis.innerHTML = mouseY + 'px';
}
