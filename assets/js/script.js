// Yesterday's Retrospective Section

// Creates a grid

const dailyTracker = document.getElementById('daily_tracker');

const arr = [
  ['Habits:', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13', 'Day 14'], 
  ['Challenged', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
  ['Hydrated', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
  ['Learned', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
  ['Walked', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
];

dailyTracker.style.setProperty('--grid-rows', 5);
dailyTracker.style.setProperty('--grid-cols', 15);
for (i=0; i<arr.length; i++){
  for (j=0; j<arr[i].length; j++){
    let cell = document.createElement("div");
    cell.innerText = arr[i][j];
    dailyTracker.appendChild(cell).className = "grid-item";
    cell.id = j+"-"+i
  }
}

// submit button saves checked box data to storage

const submitYesterday = document.getElementById('submit_yesterday');
submitYesterday.addEventListener('click', function(event) {
  event.preventDefault();
  const hydrated = document.getElementById('hydrated').checked;
  const learned = document.getElementById('learned').checked;
  const walked = document.getElementById('walked').checked;
  const challenged = document.getElementById('challenged').checked;

  const dailyProductivity = {
    challenged: challenged,
    hydrated: hydrated,
    learned: learned,
    walked: walked 
  };
  const productivityLog = JSON.parse(localStorage.getItem('dailyProductivity')) || [];
  productivityLog.push(dailyProductivity);
  localStorage.setItem('dailyProductivity', JSON.stringify(productivityLog));

  if (productivityLog !== null) {
    for (i = 0; i < productivityLog.length; i++) {
      productivityLog[i].challenged? document.getElementById(`${i+1}-1`).setAttribute('style', 'background-color: green;') : document.getElementById(`${i+1}-1`).setAttribute('style', 'background-color: red;')
      productivityLog[i].hydrated? document.getElementById(`${i+1}-2`).setAttribute('style', 'background-color: green;') : document.getElementById(`${i+1}-2`).setAttribute('style', 'background-color: red;')
      productivityLog[i].learned? document.getElementById(`${i+1}-3`).setAttribute('style', 'background-color: green;') : document.getElementById(`${i+1}-3`).setAttribute('style', 'background-color: red;')
      productivityLog[i].walked? document.getElementById(`${i+1}-4`).setAttribute('style', 'background-color: green;') : document.getElementById(`${i+1}-4`).setAttribute('style', 'background-color: red;')
        }
      }
    }
);


// Yesterday's Highlight Section

  // Function to pull a random entry from yesterday out and display it

      // Collect an array of data from Local Storage

      // Take a random item from the array

      // Display that random item to the <p> tag

//--------------------------------------------------------------------------------

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
