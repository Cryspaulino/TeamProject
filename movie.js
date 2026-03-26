
// movie.js


const extraActivity = [
  {
    "text": "Wear matching pajamas",
    "image": "https://www.walmart.com/ip/Odeerbi-Matching-Family-Christmas-Pajamas-Sets-Hooded-Onesie-Sleepwear-Womens-2025-Fashion-Cute-Xmas-Fawn-Print-Plush-Jumpsuit-Family-Parent-Child-We/5082134575"
  },
  {
    "text": "Build a blanket fort to watch in",
    "image": "https://www.happymumhappychild.co.nz/how-to-build-a-blanket-fort/"
  },
  {
    "text": "Make homemade popcorn with unique toppings",
    "image": "httpshttps://urbaninfant.com/blogs/raising/is-popcorn-a-safe-snack-for-toddlers-preparing-for-holiday-movie-nights?srsltid=AfmBOookO1VJHnfK067wypSmFVNo0CKdo5DXvN_fK9837BWjyEbVya1V://source.unsplash.com/featured/?gourmet,popcorn"
  },
  {
    "text": "Bake cookies during the movie",
    "image": "https://sallysbakingaddiction.com/chewy-chocolate-chip-cookies/"
  },
  {
    "text": "Order takeout that matches the movie’s cuisine",
    "image": "https://www.eatthis.com/healthy-takeout-food/"
  },
  {
    "text": "Dress like a character from the movie",
    "image": "https://www.goodhousekeeping.com/holidays/halloween-ideas/g29516206/best-tv-movie-character-halloween-costumes/"
  },
  {
    "text": "Watch the movie somewhere unusual (backyard, garage, floor picnic)",
    "image": "https://www.premiereoutdoormovie.com/beyond-the-living-room-how-outdoor-movie-experiences-are-changing-home-entertainment"
  },
  {
    "text": "Create themed cocktails",
    "image": "https://www.taketwotapas.com/space-pop-cocktail-star-spangled-summer/"
  },
  {
    "text": "Light candles for a cozy cinema vibe",
    "image": "https://source.unsplash.com/featured/?candles,cozy,night"
  },
  {
    "text": "Turn off phones for a fully immersive experience",
    "image": "https://www.google.com/imgres?q=phone%20down&imgurl=https%3A%2F%2Ftownsquare.media%2Fsite%2F519%2Ffiles%2F2021%2F03%2FUntitled-design-2021-03-04T135502.847.jpg%3Fw%3D780%26q%3D75&imgrefurl=https%3A%2F%2Ffun107.com%2Fphone-face-down-rude%2F&docid=ymX0hh8QQqliWM&tbnid=Dzwt_xNsJCwUgM&vet=12ahUKEwjw-Iid3_iSAxWfKUQIHYI6PQ0QnPAOegQIKxAB..i&w=780&h=520&hcb=2&ved=2ahUKEwjw-Iid3_iSAxWfKUQIHYI6PQ0QnPAOegQIKxAB"
  },
  {
    "text": "Make a charcuterie board",
    "image": "https://www.google.com/imgres?q=charcuterie%20board&imgurl=https%3A%2F%2Ftastesbetterfromscratch.com%2Fwp-content%2Fuploads%2F2021%2F12%2FCharcuterie-Board24-1-1.jpg&imgrefurl=https%3A%2F%2Ftastesbetterfromscratch.com%2Fcharcuterie-board%2F&docid=m579qxYWWt4r_M&tbnid=UNe4NjsWVW-HmM&vet=12ahUKEwjIz_Oo3_iSAxWlJ0QIHZ1nNK4QnPAOegQIHRAB..i&w=1200&h=1800&hcb=2&ved=2ahUKEwjIz_Oo3_iSAxWlJ0QIHZ1nNK4QnPAOegQIHRAB"
  },
  {
    "text": "Do a movie-themed trivia game afterward",
    "image": "https://source.unsplash.com/featured/?trivia,game,night"
  },
  {
    "text": "Pause halfway for an intermission snack break",
    "image": "https://dfjx2uxqg3cgi.cloudfront.net/img/eps/E2277/c/E2277_00.jpg?20141104142069"
  },
  {
    "text": "Watch with subtitles on (even if it's your language)",
    "image": "https://source.unsplash.com/featured/?movie,subtitles"
  },
  {
    "text": "Rate the movie dramatically at the end like film critics",
    "image": "https://source.unsplash.com/featured/?movie,review,notebook"
  },
  {
    "text": "Make DIY movie tickets before starting",
    "image": "https://source.unsplash.com/featured/?movie,tickets,diy"
  },
  {
    "text": "Eat only snacks that start with the same letter as the movie title",
    "image": "https://source.unsplash.com/featured/?movie,snacks"
  },
  {
    "text": "Do a quick craft related to the movie’s theme",
    "image": "https://source.unsplash.com/featured/?crafting,home"
  },
  {
    "text": "Watch by projector if available",
    "image": "https://source.unsplash.com/featured/?home,projector,movie"
  },
  {
    "text": "Sit on the floor with oversized pillows",
    "image": "https://source.unsplash.com/featured/?floor,pillows,cozy"
  },
  {
    "text": "Have a pajama fashion show before pressing play",
    "image": "https://source.unsplash.com/featured/?pajama,party"
  },
  {
    "text": "Cook dinner together before the movie starts",
    "image": "https://source.unsplash.com/featured/?cooking,together"
  },
  {
    "text": "Write a one-sentence review after it ends",
    "image": "https://source.unsplash.com/featured/?writing,review,notebook"
  },
  {
    "text": "Make sundaes for best part of movie",
    "image": "https://source.unsplash.com/featured/?ice,cream,sundae"
  },
  {
    "text": "Turn it into a double feature night",
    "image": "https://source.unsplash.com/featured/?movie,marathon"
  },
  {
    "text": "Watch with commentary on (if available)",
    "image": "https://source.unsplash.com/featured/?home,theater,remote"
  },
  {
    "text": "Do a 5-minute stretch break halfway through",
    "image": "https://source.unsplash.com/featured/?stretching,living,room"
  },
  {
    "text": "Create a bingo card with common movie tropes",
    "image": "https://source.unsplash.com/featured/?bingo,card"
  },
  {
    "text": "Swap seats halfway through",
    "image": "https://source.unsplash.com/featured/?living,room,seating"
  },
  {
    "text": "Make it a no-lights, cinema-only glow experience",
    "image": "https://source.unsplash.com/featured/?dark,home,cinema"
  }
]

function getRandomAct(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function showAct() {
    const randomAct = getRandomAct(extraActivity);

    const container = document.getElementById("activity");

    container.innerHTML = `
    <img src="${randomAct.image} alt="image for activity">
    <p>${randomAct.text}</p>`
}

showAct();











/* ==========================================
   MOVIE.JS - Movie Detail Page Script
   
   URL parameters
   
   This script handles the movie detail page (movie.html)
   It receives data through URL parameters, for example:
   - movie.html?id=5  (shows movie with id 5)
   - movie.html?id=12 (shows movie with id 12)
   
   Stop...weirdness happening...
   
   ========================================== */

console.log('✅ movie.js loaded successfully!');
console.log('📄 Movie detail page initialized');

/* ==========================================
   FUTURE IMPLEMENTATION 
   
   
   ========================================== */

/* ==========================================
   URL PARAMETER PARSING
   
   When the URL is: movie.html?id=5&genre=sci-fi
   
   const params = new URLSearchParams(window.location.search);
   const id = params.get('id');        // Returns "5"
   const genre = params.get('genre');  // Returns "sci-fi"
   
   This is how we'll know which movie to display!
   ========================================== */
