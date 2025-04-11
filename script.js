// Update the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Dynamic Quote Feature

function quote(){
    const quotes = [
        "They drew a line, sharp and cold, Dividing hearts, both young and old.",
        "Not by deeds, nor voice, nor soul— But by the shade we can't control.",
        "Discrimination is the unfair and unequal treatment of individuals or groups based on characteristics like race, age, gender, origin, or beliefs.",
        "A name misheard, a glance too long, A silent whisper, loud and wrong.",
        "Doors closed tight with unseen locks, Dreams kept out by ticking clocks.",
        "They fear what's different, call it strange, As if we're threats they need to change.",
        "But we're the same beneath the skin— The world outside, the fire within.",
        "Tear down the wall, stone by stone, No one was meant to stand alone.",
        "Let kindness grow where hate once stood, And fill this world with brotherhood."
     ];

  // Set a random quote at page load
  const quoteContainer = document.getElementById('quoteContainer');
  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteContainer.innerHTML = quotes[randomIndex];
  }

  displayRandomQuote();
}

// Optionally, update the quote every 10 seconds
setInterval(displayRandomQuote, 10000);