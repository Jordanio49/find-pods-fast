var searchBtn = document.getElementById('search-btn');
var searchText = document.getElementById('autocomplete-input')
var searchHistoryEl = document.getElementById('recent-search')


searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    getDataFromItunes(event);
});

// function calls itunes API for pod cards, saves seach to local storage, and creates button dynamically
function getDataFromItunes(event) {

                var apiUrl = 'https://itunes.apple.com/search?term=' + searchText.value + '&entity=podcast&limit=8'
                    fetch(apiUrl)
                 .then(data => data.json())
                 .then(json => {
            for (let i = 0; i < json.results.length; i++) {
                var podcastTitles = json.results[i].collectionName;
                var podcastLinks = json.results[i].collectionViewUrl;
                var podcastImages = json.results[i].artworkUrl600;
                var title = document.getElementById('title-' + [i])
                var link = document.getElementById('pod-link-' + [i])
                var image = document.getElementById('image-' + [i])
                title.textContent = podcastTitles
                link.setAttribute('href', podcastLinks)
                image.setAttribute('src', podcastImages)                    
            }

            //heres the buttons!
            var genre;
            if (searchText.value != "" ) {
              genre = searchText.value;
                console.log(storeGenre.includes(genre))

              if (storeGenre.includes(genre) !== true) {
                storeGenre.push(genre);
                localStorage.setItem('genre', JSON.stringify(storeGenre));
                var btn = document.createElement('button');
                btn.className += ' waves-effect waves-light btn purple accent-1';
                btn.id += 'toggle'
                btn.innerText = genre;
                btn.value = genre;
                searchHistoryEl.appendChild(btn);
                var br = document.createElement('br');
                searchHistoryEl.appendChild(br);
              }
            }
        })
    }
    
// getting data from local 
let storeGenre = JSON.parse(localStorage.getItem('genre')) || [];

// forloop global and runs when page loads
for (let i = 0; i < storeGenre.length; i++) {
    var btn = document.createElement("button");
    btn.className += ' waves-effect waves-light btn purple accent-1';
    btn.id += 'toggle'
    btn.innerText = storeGenre[i];
    btn.value = storeGenre[i];
    searchHistoryEl.appendChild(btn);
    var br = document.createElement("br");
    searchHistoryEl.appendChild(br);
}


// trying to get toggle to change cards :(
 var toggle = document.getElementById('toggle')

toggle.addEventListener('click', (e) => {
    e.preventDefault();
    buttonGet(e);
});

function buttonGet(e) {
    var apiUrl = 'https://itunes.apple.com/search?term=' + btn.innerText + '&entity=podcast&limit=8'
        fetch(apiUrl)
     .then(data => data.json())
     .then(json => {
for (let i = 0; i < json.results.length; i++) {
    var podcastTitles = json.results[i].collectionName;
    var podcastLinks = json.results[i].collectionViewUrl;
    var podcastImages = json.results[i].artworkUrl600;
    var title = document.getElementById('title-' + [i])
    var link = document.getElementById('pod-link-' + [i])
    var image = document.getElementById('image-' + [i])
    title.textContent = podcastTitles
    link.setAttribute('href', podcastLinks)
    image.setAttribute('src', podcastImages)
        }
    })
}




        //this is for the tickmaster API i commented this out because i wanted all the cards to populate
                // $.ajax({
                //     type: "GET",
                //     url: "https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=hVqnL1G7fRfOFT0cqthaFdUpZ5C4mZJ8&size=100&keyword=" + podcastTitles,
                //     async: true,
                //     dataType: "json",
                //     // success: function (json) {
                //     //     console.log(json);
                //     //         var livePodcasts = json._embedded.attractions[0].name
                //     //         console.log(livePodcasts)
                            
                //     //         // if (livePodcasts) {
                //     //         //     upcomingShows.innerHTML = "There are Upcoming Shows! Check Ticket Master for more info."
                //     //         // }
                //     //         // else {
                //     //         //     upcomingShows.innerHTML = "There are no shows Upcoming"
                //     //         // }
                //     // }
                // })