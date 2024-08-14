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

