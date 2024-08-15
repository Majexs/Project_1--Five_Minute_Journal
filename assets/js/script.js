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

