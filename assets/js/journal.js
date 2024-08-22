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
localStorage.setItem('allFormData', JSON.stringify(allFormData));
});


//feature-submission_popup

const button = document.getElementById('submitButton')


//Randomizer for quotes and challenges 
const RandomQuote = function (){
    
    const Qouts={
        
        author:['Vladimir Lenin',"Mahatma Gandhi",'Thomas Alva Edison','John F. Kennedy','Stephen Hawking','Booker T. Washington',
          'George R.R. Martin','Aesop','Vidal Sassoon','Mahatma Gandhi','Heraclitus','Susanna Clark and Richard Leigh',
        "Susan B. Anthony",'Henry Ford',"George Addair","Beverly Sills","Maya Angelou","Benjamin Franklin","Charles Swindoll","Ralph Waldo Emerson","Dr. Seuss",
        "Thomas Jefferson","Franklin D. Roosevelt","Jim Rohn","Dolly Parton","H. Jackson Brown, Jr.","Confucius","Edmund Burke","Eleanor Roosevelt",
        "Mother Teresa"
      ],
        
        Qout:["Learning is never done without error, and defeat",
            "You must be the change you wish to see in the world.",
            "There is no substitute for hard work.","Victory has a thousand fathers, but defeat is an orphan." ,
            "However difficult life may seem, there is always something you can do and succeed at.",'Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.',
            "Once you’ve accepted your flaws, no one can use them against you.","No act of kindness, no matter how small, is ever wasted.",
            "The only place where success comes before work is in the dictionary.","Where there is love there is life.","There is nothing permanent except change.","Dance like nobody's watching.",
            "Independence is happiness.","When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.","Everything you've ever wanted is on the other side of fear.",
            "You may be disappointed if you fail, but you are doomed if you don't try.","Do the best you can until you know better. Then when you know better, do better.","I didn't fail the test. I just found 100 ways to do it wrong.",
            "Life is 10% what happens to me and 90% of how I react to it.","Life is a succession of lessons which must be lived to be understood.","You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
            "I find that the harder I work, the more luck I seem to have.","The only limit to our realization of tomorrow will be our doubts of today.","If you are not willing to risk the usual, you will have to settle for the ordinary.",
            "The way I see it, if you want the rainbow, you gotta put up with the rain.","The best preparation for tomorrow is doing your best today.","Everything has beauty, but not everyone sees it.","The only thing necessary for the triumph of evil is for good men to do nothing","No one can make you feel inferior without your consent.",
            "I alone cannot change the world, but I can cast a stone across the water to create many ripples.",

        ],

    };

    const Challenges =["Meditate for 5-10 Minutes a Day","Do at least 25 jumping jacks","Sit down at the table for breakfast in the morning","Read for 15 minutes before bed each night",
      "Light incense or a candle when you get home","Write a letter to someone today","Write down one thing each day you love about yourself","Watch 30 minutes of that show you've been meaning to catch up on","Make the bed each morning first thing",
      "Cook a meal for yourself each day","Get up 20 minutes earlier than your regular time","Spend 15 minutes each day organizing a space in your home","Use lotion on your hands","Watch How To Videos on something you've always wanted to learn (check YouTube)","15 minutes of listening to your favorite music",
      "Sit in nature","Text a friend and let them know why they matter to you","Take a bubble bath","Watch sunset or sunrise","Take a photo of something that makes you happy",`Spend 10 minutes drawing or doodling -- even if you think you "can't"`,"Make tea before bed","Donate one thing from your home","Try Yoga",
      "Take a walk without your phone","Start your morning with a green smoothie","Walk 10,000 steps","Read a book first thing in the morning","Stretch for 5-10 minutes","Sit in silence for 10 minutes to visualize your dreams","Do 10 pushups","Drink 2 litres of water",
      "Eat only home-cooked food",
    ]

    
    var RandomNum = Math.floor(Math.random()* Qouts.Qout.length);
    var RanChallenge = Math.floor(Math.random()*Challenges.length)
    
    
    qoute=`"${Qouts.Qout[RandomNum]}"  `;
    //displaying quotes and challenges
    author=`Author- ${Qouts.author[RandomNum]} `;
    let Challenge =`${Challenges[RanChallenge]}`

    alert(`Way to go! Amazing job submitting today's 5 minute Jornal!!
Quote of the day

${qoute}  ${author}

Challenge For today: ${Challenge}`)

window.location.replace("./index.html");
}


// event listener to display quotes and challenges
button.addEventListener('click', ()=> {
  RandomQuote()

})
