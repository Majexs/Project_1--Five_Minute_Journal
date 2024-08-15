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

// Object to store form data
const journalEntry = {
    greatfulInput: {},
    todayInput: {},
    affirmationInput:{}
};

//Function to handel form submission
function journalSubmit (event, formElement, formKey) {
    event.preventDefault(); // Prevent the default form submission

    const formEntries = {};
    const inputs = formElement.querySelectorAll('input');

    inputs.forEach(input => {
        formEntries[input.name] = input.value;
    });

    journalEntry[formKey] = formEntries;
    console.log(journalEntry);
}

//Function to call journalSubmit function and pass the form element into corresponding object
//ex. putting the data from the first form into greatfulInput when submit button is clicked
function handelSubmitButtonClick (event) {
    console.log('hello');
    event.preventDefault(); //Prevent default button action

    //Get each form element
    const greatfulElement = document.getElementById ('greatfulForm');
    const todayElement = document.getElementById ('todayForm');
    const affirmationElement = document.getElementById ('affirmationForm');

    //Handel each form submission
    journalSubmit(event, greatfulElement, 'greatfulInput');
    journalSubmit(event, todayElement, 'todayInput');
    journalSubmit(event, affirmationElement, 'affirmationInput');
}

// Add event listeners to submit button
document.getElementById('submitButton').addEventListener('click',handelSubmitButtonClick);


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
