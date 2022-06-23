document.addEventListener("DOMContentLoaded", () => {
  // your code here
// User should be able to submit their input in the form
// As a programmer I am supposed to grab the form element from the HTML.
//Assign a variable to the form that I am grabbing from the HTML.
//Parse the event i want to see when the user is able to input their tasks

let send = document.querySelector('#create-task-form');
  send.addEventListener('Submit', (event)=> event.preventDefault())

  let userInput = document.querySelector('#new-task-description').value 
  console,log(userInput);

  let li = document.createElement('li');
  li.append(userInput);
  document.querySelector("tasks").appendChild(li);
 


});
