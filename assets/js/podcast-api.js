var searchBtn = document.getElementById('search-btn');
var searchText = document.getElementById('autocomplete-input')
var searchHistoryEl = document.getElementById('recent-search')
var toggle = document.getElementById('toggle')

searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    getDataFromItunes(event);
});

// itunes API for pod cards
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

     //heres the buttons!
                var genre;
                if (searchText.value != '') {
                  genre = searchText.value;
                  storeGenre.push(genre);
                  localStorage.setItem('genre', JSON.stringify(storeGenre));
                  if (storeGenre.includes(genre) == true) {
                    var btn = document.createElement('button');
                    btn.className += ' waves-effect waves-light btn purple accent-1';
                    btn.id += 'toggle'
                    btn.innerText = genre;
                    btn.value = genre;
                    searchHistoryEl.appendChild(btn);
                    var br = document.createElement('br');
                    searchHistoryEl.appendChild(br);
                  }
                } else { 
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
            }

        })
    }
    

//need to save one search  in ls at a time and not 7
let storeGenre = JSON.parse(localStorage.getItem('genre')) || [];

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

// toggle.addEventListener('click', (e) => {
//     getDataFromItunes(e);
// });

// function buttonGet() {
//     var apiUrl = 'https://itunes.apple.com/search?term=' + searchText.value + '&entity=podcast&limit=8'
//         fetch(apiUrl)
//      .then(data => data.json())
//      .then(json => {
// for (let i = 0; i < json.results.length; i++) {
//     var podcastTitles = json.results[i].collectionName;
//     var podcastLinks = json.results[i].collectionViewUrl;
//     var podcastImages = json.results[i].artworkUrl600;
//     var title = document.getElementById('title-' + [i])
//     var link = document.getElementById('pod-link-' + [i])
//     var image = document.getElementById('image-' + [i])
//     // var upcomingShows = document.getElementById('upcoming-shows-' + [i])
//     title.textContent = podcastTitles
//     link.setAttribute('href', podcastLinks)
//     image.setAttribute('src', podcastImages)
//         }
//     })
// }
