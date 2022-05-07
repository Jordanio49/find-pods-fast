var searchBtn = document.getElementById("search-btn");
var searchText = document.getElementById("autocomplete-input");
var searchHistoryEl = document.getElementById('recent-search')

// comparing apis for live show
var podcastTitles = [];
var showTitles = [];


// running fetch for both apis
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getApiData();
});

//function calls itunes API for pod cards, saves seach to local storage, and creates button dynamically
function getApiData() {
  var appleApiUrl =
    "https://itunes.apple.com/search?term=" +
    searchText.value +
    "&entity=podcast&limit=8";
  fetch(appleApiUrl)
    .then((data) => data.json())
    .then((json) => {
      for (let i = 0; i < json.results.length; i++) {
        podcastTitles.push(json.results[i].collectionName);
        // podcastTitles = json.results[i].collectionName;
        var podcastLinks = json.results[i].collectionViewUrl;
        var podcastImages = json.results[i].artworkUrl600;
        var title = document.getElementById("title-" + [i]);
        var link = document.getElementById("pod-link-" + [i]);
        var image = document.getElementById("image-" + [i]);
        title.textContent = podcastTitles[i];
        link.setAttribute("href", podcastLinks);
        image.setAttribute("src", podcastImages);
      }
      console.log(podcastTitles);
      var ticketmasterApiUrl =
        "https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=hVqnL1G7fRfOFT0cqthaFdUpZ5C4mZJ8&size=100&classificationName=podcast";
      fetch(ticketmasterApiUrl)
        .then((data) => data.json())
        .then((json) => {
          // console.log(json)
          for (let i = 0; i < json._embedded.attractions.length; i++) {
            showTitles.push(json._embedded.attractions[i].name);
          }
          console.log(showTitles);
          checkLiveEvents();
          podcastTitles = [];
          showTitles = [];
        });
    });

  var genre;
  if (searchText.value != "") {
    genre = searchText.value.toUpperCase();
    console.log(storeGenre.includes(genre));

    if (storeGenre.includes(genre) !== true) {
      storeGenre.push(genre);
      localStorage.setItem("genre", JSON.stringify(storeGenre));
      var btn = document.createElement("button");
      btn.className += " waves-effect waves-light btn purple accent-1";
      btn.id += "toggle";
      btn.innerText = genre;
      btn.value = genre;
      searchHistoryEl.appendChild(btn);
      var br = document.createElement("br");
      searchHistoryEl.appendChild(br);
    }
  }
}

//comparing podcast and live shows, dynamically updates card text
function checkLiveEvents() {
  for (i = 0; i < showTitles.length; i++) {
    for (j = 0; j < podcastTitles.length; j++) {
      var upcomingShows = document.getElementById("upcoming-shows-" + [j]);
      if (showTitles[i] === podcastTitles[j]) {
        upcomingShows.textContent =
          "There are upcoming live events! Check ticketmaster for more details.";
        console.log("Found shows");
        return;
      }
      upcomingShows.textContent =
        "Unfortunately there are no scheduled live events";
    }
  }
}

 // getting data from local
let storeGenre = JSON.parse(localStorage.getItem("genre")) || [];

// forloop global and runs when page loads
for (let i = 0; i < storeGenre.length; i++) {
  var btn = document.createElement("button");
  btn.className += " waves-effect waves-light btn purple accent-1";
  btn.id += "toggle";
  btn.innerText = storeGenre[i];
  btn.value = storeGenre[i];
  searchHistoryEl.appendChild(btn);
  var br = document.createElement("br");
  searchHistoryEl.appendChild(br);
}

// togglebutton functionality 

var toggle = document.getElementById('toggle')

toggle.addEventListener('click', (e) => {
    e.preventDefault();
    buttonGet();
});

function buttonGet() {
    var appleApiUrl =
    "https://itunes.apple.com/search?term=" +
    btn.innerText +
    "&entity=podcast&limit=8";
  fetch(appleApiUrl)
    .then((data) => data.json())
    .then((json) => {
      for (let i = 0; i < json.results.length; i++) {
        podcastTitles.push(json.results[i].collectionName);
        var podcastLinks = json.results[i].collectionViewUrl;
        var podcastImages = json.results[i].artworkUrl600;
        var title = document.getElementById("title-" + [i]);
        var link = document.getElementById("pod-link-" + [i]);
        var image = document.getElementById("image-" + [i]);
        title.textContent = podcastTitles[i];
        link.setAttribute("href", podcastLinks);
        image.setAttribute("src", podcastImages);
      }
      console.log(podcastTitles);
      var ticketmasterApiUrl =
        "https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=hVqnL1G7fRfOFT0cqthaFdUpZ5C4mZJ8&size=100&classificationName=podcast";
      fetch(ticketmasterApiUrl)
        .then((data) => data.json())
        .then((json) => {
          for (let i = 0; i < json._embedded.attractions.length; i++) {
            showTitles.push(json._embedded.attractions[i].name);
          }
          console.log(showTitles);
          checkLiveEvents();
          podcastTitles = [];
          showTitles = [];
        });
    });

};




