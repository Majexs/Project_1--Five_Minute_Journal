
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
