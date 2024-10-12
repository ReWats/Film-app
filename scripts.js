//Create array to store a database of our movies
const movies = [
  "Die Hard",
  "Speed",
  "The Fast and The Furious",
  "Salt",
  "Top Gun Maverick",
  "Gremlins",
  "Dracula",
  "Trick or Treat",
  "The Cabin in the Woods",
  "The Dark and the Wicked",
  "E.T. the Extra Terrestrial",
  "Who Framed Roger Rabbit",
  "The Lion King",
  "Toy Story",
  "Spirited Away",
  "Harry Potter and the Goblet of Fire",
  "Howl's Moving Castle",
  "WALL.E",
  "Speder-Man Into the Spider-Verse",
  "Inside Out 2",
  "A Room With a View",
  "Titanic",
  "Pride and Prejudice",
  "About Time",
  "The Idea of You",
  "Zoolander",
  "21 Jump Street",
  "Mrs Doubtfire",
  "Beverly Hills Cop",
  "Ace Ventura: Pet Detective"
];

//Create a seperate array to store our saved movies 
let savedMovies = []; 

//onClick event added to "surprise me" button in HTML to call the function
function randomMovies() {
  const movieList = document.getElementById("surpriseMe");
  movieList.innerHTML = ""; 

//Get 3 random movies from the list
  const randomMovies = getRandomMovies(3); 

//Iterate over the list using forEach
  randomMovies.forEach(film => {
    const listItem = document.createElement("p");
    listItem.textContent = film;

//Create a "Save" button for each movie that we have recommended
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save for Later";
    saveButton.onclick = () => saveMovie(film);

    listItem.appendChild(saveButton);
    movieList.appendChild(listItem);
  });
}

//Function to get random movies
function getRandomMovies(count) {
  const randomMovies = [];
  const movieCopy = movies.slice();

//Loop until we have the desired number of random movies
  while (randomMovies.length < count) {
    const randomIndex = Math.floor(Math.random() * movieCopy.length);
    const pickedMovie = movieCopy.splice(randomIndex, 1)[0];
    
    randomMovies.push(pickedMovie);
  }
  
//Return the array of random movies on the webpage
  return randomMovies; 
}

//Function to save a movie
function saveMovie(movie) {
  if (!savedMovies.includes(movie)) {
    savedMovies.push(movie); 
//Add movie to saved list
    updateSavedMoviesList();
  } else {
//Give an alert if user tries to add same movie twice,tried using blurt for something better looking but couldn't get the external css + js to work in codepen
    alert(`${movie} is already in your saved list.`);
  }
}

//Function to update the saved movies display
function updateSavedMoviesList() {
  const savedList = document.getElementById("savedMovies");
  savedList.innerHTML = ""; 

//Create a list of the saved movies  
  savedMovies.forEach(movie => {
    const listItem = document.createElement("p");
    listItem.textContent = movie;
    savedList.appendChild(listItem);
  });
}

//Enable the share button (tried to have the button set as disabled if 0 entries but wouldn't enabled for some reason when entries were added to list)
  document.getElementById("shareButton").enabled = savedMovies.length === 0;

//User receives an alert if they try to share a list with no entries
function shareList() {
  if (savedMovies.length === 0) {
    alert("You have no saved movies to share.");
  }

 //Define what will be in the alert; 
  const shareText = `Check out my saved movies! ${savedMovies.join(", ")}`;
  
//run the alert and display movies in the users list
    alert(shareText);
}
