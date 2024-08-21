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

// Maintaining Grid After Refresh

const productivityLog = JSON.parse(localStorage.getItem('dailyProductivity')) || [];
if (productivityLog !== null) {
  for (i = 0; i < productivityLog.length; i++) {
    productivityLog[i].challenged? document.getElementById(`${i+1}-1`).setAttribute('style', 'background-color: #218838;') : document.getElementById(`${i+1}-1`).setAttribute('style', 'background-color: #CDA34F;')
    productivityLog[i].hydrated? document.getElementById(`${i+1}-2`).setAttribute('style', 'background-color: #218838;') : document.getElementById(`${i+1}-2`).setAttribute('style', 'background-color: #CDA34F;')
    productivityLog[i].learned? document.getElementById(`${i+1}-3`).setAttribute('style', 'background-color: #218838;') : document.getElementById(`${i+1}-3`).setAttribute('style', 'background-color: #CDA34F;')
    productivityLog[i].walked? document.getElementById(`${i+1}-4`).setAttribute('style', 'background-color: #218838;') : document.getElementById(`${i+1}-4`).setAttribute('style', 'background-color: #CDA34F;')
  }
}

// Submit button saves checked box data to storage

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
      productivityLog[i].challenged? document.getElementById(`${i+1}-1`).setAttribute('style', 'background-color: #218838;') : document.getElementById(`${i+1}-1`).setAttribute('style', 'background-color: #D1A54B;')
      productivityLog[i].hydrated? document.getElementById(`${i+1}-2`).setAttribute('style', 'background-color: #218838;') : document.getElementById(`${i+1}-2`).setAttribute('style', 'background-color: #D1A54B;')
      productivityLog[i].learned? document.getElementById(`${i+1}-3`).setAttribute('style', 'background-color: #218838;') : document.getElementById(`${i+1}-3`).setAttribute('style', 'background-color: #D1A54B;')
      productivityLog[i].walked? document.getElementById(`${i+1}-4`).setAttribute('style', 'background-color: #218838;') : document.getElementById(`${i+1}-4`).setAttribute('style', 'background-color: #D1A54B;')
    }
  }
}
);


// Yesterday's Highlight Section
const yesterdaysHighlight = document.querySelector('.yesterdays_highlight');

// Function to pull a random entry from yesterday out and display it

// Collect an array of data from Local Storage
const yesterdaysEntry = JSON.parse(localStorage.getItem('allFormData')) || [];

// Take a random item from the array
const randomJournalEntry = yesterdaysEntry[Math.floor(Math.random() * yesterdaysEntry.length)];

// Display that random item to the <p> tag
yesterdaysHighlight.textContent = randomJournalEntry;


//--------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  const moodButtons = document.querySelectorAll('.mood-btn');
  const energyLevelInput = document.getElementById('energyLevel');
  const energyValueSpan = document.getElementById('energyValue');
  const moodMessage = document.getElementById('moodMessage');
  const journalButton = document.getElementById('journalButton');

  // Load saved data
  const savedMood = localStorage.getItem('mood');
  const savedEnergy = localStorage.getItem('energyLevel');

  if (savedMood) {
      moodButtons.forEach(button => {
          if (button.dataset.mood === savedMood) {
              button.style.backgroundColor = '#d3d3d3'; // Highlight selected mood
              moodMessage.textContent = `You are ${savedMood.replace('-', ' ')} today`;
          }
      });
  }

  if (savedEnergy) {
      energyLevelInput.value = savedEnergy;
      energyValueSpan.textContent = savedEnergy;
  }

  // Mood selection
  moodButtons.forEach(button => {
      button.addEventListener('click', () => {
          moodButtons.forEach(btn => btn.style.backgroundColor = ''); // Remove highlight
          button.style.backgroundColor = '#d3d3d3'; // Highlight selected mood
          const mood = button.dataset.mood;
          localStorage.setItem('mood', mood);
          moodMessage.textContent = `You are ${mood.replace('-', ' ')} today`;
      });
  });

  // Energy level adjustment
  energyLevelInput.addEventListener('input', (e) => {
      const value = e.target.value;
      energyValueSpan.textContent = value;
      localStorage.setItem('energyLevel', value);
  });
});