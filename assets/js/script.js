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

=======

document.querySelectorAll('.emoji').forEach(emoji => {
    emoji.addEventListener('click', function() {
        // Remove selected class from all emojis
        document.querySelectorAll('.emoji').forEach(e => e.classList.remove('selected'));

        // Add selected class to the clicked emoji
        this.classList.add('selected');

        // Update the mood text
        const moodText = this.getAttribute('data-mood');
        let moodDescription = '';
        switch(moodText) {
            case '1':
                moodDescription = 'Very Sad';
                break;
            case '2':
                moodDescription = 'Sad';
                break;
            case '3':
                moodDescription = 'Neutral';
                break;
            case '4':
                moodDescription = 'Happy';
                break;
            case '5':
                moodDescription = 'Very Happy';
                break;
        }
        document.getElementById('selected-mood').textContent = `Your mood: ${moodDescription}`;
    });
});

function updateEnergyLevel() {
    var energyLevel = document.getElementById("energyRange").value;
    document.getElementById("energyOutput").innerText = energyLevel;
}


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

// Function to update list

