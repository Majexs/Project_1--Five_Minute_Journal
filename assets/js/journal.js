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

let qoute;
let author;

var a = [];
a.push(JSON.parse(localStorage.getItem('session')));
localStorage.setItem('session', JSON.stringify(a));


const RandomQuote = function (){
    
    const Qouts={
        
        author:['Vladimir Lenin',"Mahatma Gandhi",'Thomas Alva Edison','John F. Kennedy','Michael Jordan', 
          'Stephen Hawking','Booker T. Washington','George R.R. Martin','Leonardo Da Vinci','Abraham Lincoln','Albert Einstein','A.A. Mine','Charles Kettering',
          'Jack Canfield','George Bernard Shaw','Og Mandino','Viktor E. Frankl','Deepak Chopra','Kobe Bryant'
        ],
        
        Qout:["Learning is never done without error, and defeat",
            "You must be the change you wish to see in the world.",
            "There is no substitute for hard work.","Victory has a thousand fathers, but defeat is an orphan." ,
            "However difficult life may seem, there is always something you can do and succeed at.",'Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.',
            "Once you’ve accepted your flaws, no one can use them against you.","You must expect great things of yourself before you can do them.",
            "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.",
            "The best way to predict your future is to create it.","If you want to live a happy life, tie it to a goal, not to people or things.","You’re braver than you believe, and stronger than you seem, and smarter than you think.",
            "Everything you want is on the other side of fear.","Life isn't about finding yourself. Life is about creating yourself.","Believe and act as if it were impossible to fail.","Always do your best. What you plant now, you will harvest later.","When we are no longer able to change a situation, we are challenged to change ourselves.",
            "Always go with your passions. Never ask yourself if it’s realistic or not.","Everything negative — pressure, challenges — is all an opportunity for me to rise."
          ]

    };

    
    var RandomNum = Math.floor(Math.random()* Qouts.Qout.length);
    var RandomNumS = RandomNum.toString()
    // SaveDataToLocalStorage(RandomNum)

    SaveDataToLocalStorage(RandomNumS)
    
    qoute=`"${Qouts.Qout[RandomNum]}"  `;

    author=`Author- ${Qouts.author[RandomNum]} `;

    console.log(qoute+author)
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

function HtmlChange(){

  const qoutes = document.getElementById("Quote");
  const authorHold = document.getElementById("authorHold");
  qoutes.innerText = qoute
  authorHold.innerHTML = author
  document.getElementById('pop_up').classList.add('OnDisplay');
  document.getElementById('pop_up').classList.add('popUpStyle');
  document.getElementById('pop_up').classList.remove('OffDisplay')
  // document.getElementById('journalEntry').classList.remove('OnDisplay');
  // document.getElementById('journalEntry').classList.add('OffDisplay');
  const header= document.getElementsByTagName("header")[0]
  const section = document.getElementsByTagName('div')[0];
  header.classList.add('OffDisplay')
  section.classList.add('OffDisplay')
  console.log(qoute)
  
}

button.addEventListener('click', ()=> {
  RandomQuote()
  HtmlChange()
  // location.replace("poppage.html")
  

})
