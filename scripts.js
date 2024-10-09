const films = {
  action: {
    "1980s": {
      short: ["Die Hard", "Running Man"],
      long: ["Apocolypse Now", "Total Recall"]
    },
    "1990s": {
      short: ["Speed", "True Lies"],
      long: ["The Green Mile", "Mission Impossible"]
    },
    "2000s": {
      short: ["The Fast and Furious", "Gone in 60 Seconds"],
      long: ["The Matrix 2", "Mission Impossible 2"]
    },
    "2010s": {
      short: ["Salt", "Red"],
      long: ["Now You See Me", "Out of Time"]
    },
    "2020s": {
      short: ["Mad Max Furiosa", "The Old Guard"],
      long: ["Top Gun Maverick", "The Joker 2"]
    },
    comedy: {
      "1980s": {
        short: ["Ferris Bueller's Day Off", "The Goonies"],
        long: ["When Harry Met Sally", "Mystic Pizza"]
      },
      "1990s": {
        short: ["Death Becomes Her", "The Witches"],
        long: ["White Men Can't Jump", "Coneheads"]
      },
      "2000s": {
        short: ["Click", "Idiocracy"],
        long: ["Hitchhikers Guide to the Galaxy", "Hancock"]
      },
      "2010s": {
        short: ["Identity Thief", "Tag"],
        long: ["Hail Cesar", "Chef"]
      },
       "2020s": {
        short: ["My Spy", "Freaky"],
        long: ["An American Pickle", "The King of Staten Island"]
      }, 
      romance: {
      "1980s": {
        short: ["Pretty in Pink", "An Officer and a Gentleman"],
        long: ["Some Kind Of Wonderful", "A Room With a View"]
      },
      "1990s": {
        short: ["Pretty Woman", "Before Sunrise"],
        long: ["Sleepless in Seattle", "The Bodyguard"]
      },
      "2000s": {
        short: ["The Proposal", "PS, I Love You"],
        long: ["The Notebook", "Moulin Rouge"]
      },
      "2010s": {
        short: ["Crazy Stupid Love", "Her"],
        long: ["A Star is Born", "The Age of Adeline"]
      },
       "2020s": {
        short: ["Anyone But You", "Emma"],
        long: ["Holidate", "The Idea of You"]
      }, 
       horror: {
      "1980s": {
        short: ["Friday 13th", "Halloween"],
        long: ["A Nightmare on Elm Street", "The Thing"]
      },
      "1990s": {
        short: ["Scream", "Sleepy Hollow"],
        long: ["Misery", "The Silence of The Lambs"]
      },
      "2000s": {
        short: ["Saw", "Hostel"],
        long: ["American Psycho", "Jennifer's Body"]
      },
      "2010s": {
        short: ["The Babadook", "The Conjuring"],
        long: ["It", "Hereditary"]
      },
       "2020s": {
        short: ["Relic", "Host"],
        long: ["The Dark and the Wicked", "The Empty Man"]
      }, 
       family: {
      "1980s": {
        short: ["Goonies", "Beethoven"],
        long: ["Honey, I Shrunk the Kids", "E.T. The Extra Terrestrial"]
      },
      "1990s": {
        short: ["My Girl", "Corrina Corrina"],
        long: ["Matilda", "The Parent Trap"]
      },
      "2000s": {
        short: ["Shark Tail", "Ratatouille"],
        long: ["Shrek", "Bridge to Taribitha"]
      },
      "2010s": {
        short: ["Moana", "Wreck it Ralph"],
        long: ["Paddington", "Tangled"]
      },
       "2020s": {
        short: ["If", "Onward"],
        long: ["The Call of the Wild", "The Witches"]
      }, 
    }
    }
    }
    }
  }
};
       
   
   
         
   function chooseFilm() {
        const genre = document.getElementById('genre').value;
        const decade = document.getElementById('decade').value;
        const runtime = document.getElementById('runtime').value;
     
        const resultBar = document.getElementById('result');
      

try {
  const filmOptions = films[genre][decade][runtime];
  if filmOptions && filmOptions.length > 0)
  
  const randomFilm = filmOptions[math.floor(math.random() * filmOptions.length)];
  resultBar.innerHTML = `<h3>Your Recommendation:</h3><p>${randomFilm}</p>`;
  
} else {
  
  resultBar.innerHTML = "No Matches!";
}
   catch (error) {
     
  resultBar.innerHTML = "No Matches!";
  
   }

   resultBar.style.display= 'block';
}
