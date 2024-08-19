let timerInterval;
let seconds = 0;
let minutes = 0;

// Function to format the time as MM:SS
function formatTime(minutes, seconds) {
    return (
      String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0')
    );
  }

// Function to update the timer
function updateTimer() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    document.getElementById('timer').innerText = formatTime(minutes, seconds);
  }
  
// Function to start the timer
function startTimer() {
    if (!timerInterval) {
      timerInterval = setInterval(updateTimer, 1000);
    }
  }

// Function to stop the timer
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
  }

// Start the timer when the page loads
window.onload = startTimer;

// Stop the timer when the submit button is clicked
document.getElementById('submitButton').addEventListener('click', function() {
    stopTimer();
  });

// Add event listeners to submit button
document.getElementById('submitButton').addEventListener('click', function() {

//Collect greatfulForm data in an object
let greatfulForm = {
  greatfulEntry1: document.getElementById('greatfulEntry1').value,
  greatfulEntry2: document.getElementById('greatfulEntry2').value,
  greatfulEntry3: document.getElementById('greatfulEntry3').value
};

//Collect todayForm data in an object
let todayForm = {
  todayEntry1: document.getElementById('todayExcellent1').value,
  todayEntry2: document.getElementById('todayExcellent2').value,
  todayEntry3: document.getElementById('todayExcellent3').value
};

//Collect todayForm data in an object
let affirmationForm = {
  affirmationEntry1: document.getElementById('dailyAffirmation1').value,
  affirmationEntry2: document.getElementById('dailyAffirmation2').value,
  affirmationEntry3: document.getElementById('dailyAffirmation3').value
};

//Store all form data in an object
let allFormData = {
  greatfulFormData: greatfulForm,
  todayFormData: todayForm,
  affirmationFormData: affirmationForm
}

console.log(allFormData);
});

//feature-submission_popup
var button = document.getElementById('submitButton');
var CB = document.getElementById('clearD')

var a = [];
a.push(JSON.parse(localStorage.getItem('session')));
localStorage.setItem('session', JSON.stringify(a));

const RandomQuote = function (){
    
    const Qouts={
        
        author:['Vladimir Lenin',"Mahatma Gandhi",'Thomas Alva Edison','John F. Kennedy','Stephen Hawking','Booker T. Washington','George R.R. Martin'],
        
        Qout:["Learning is never done without error, and defeat",
            "You must be the change you wish to see in the world.",
            "There is no substitute for hard work.","Victory has a thousand fathers, but defeat is an orphan." ,
            "However difficult life may seem, there is always something you can do and succeed at.",'Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.',
            "Once you’ve accepted your flaws, no one can use them against you.",'',
        ],

    };

    
    var RandomNum = Math.floor(Math.random()* Qouts.Qout.length);
    var RandomNumS = RandomNum.toString()
    SaveDataToLocalStorage(RandomNum)
    
    //return alert(`"${Qouts.Qout[RandomNum]}" Author- ${Qouts.author[RandomNum]} `)
}

function SaveDataToLocalStorage(data)
{
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('session')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Alert the array value
      
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('session', JSON.stringify(a));
}

button.addEventListener('click', RandomQuote)

CB.addEventListener('click', ()=>{
    localStorage.removeItem("session")
})
