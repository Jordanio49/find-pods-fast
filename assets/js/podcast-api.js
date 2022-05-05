var searchBtn = document.getElementById('search-btn');
var searchText = document.getElementById('autocomplete-input')

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    getDataFromItunes()
})


function getDataFromItunes() {
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
                var upcomingShows = document.getElementById('upcoming-shows-' + [i])

                title.textContent = podcastTitles
                link.setAttribute('href', podcastLinks)
                image.setAttribute('src', podcastImages)

                $.ajax({
                    type: "GET",
                    url: "https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=hVqnL1G7fRfOFT0cqthaFdUpZ5C4mZJ8&size=100&keyword=" + podcastTitles,
                    async: true,
                    dataType: "json",
                    success: function (json) {
                        console.log(json);
                        // for (let i = 0; i < json._embedded.attractions.length; i++) {
                            var livePodcasts = json._embedded.attractions[0].name
                            
                            console.log(livePodcasts)
                            
                            if (livePodcasts) {
                                upcomingShows.innerHTML = "There are Upcoming Shows! Check Ticket Master for more info."
                                console.log(ticketUrl)
                            }
                            else{
                                upcomingShows.innerHTML = "There are no shows Upcoming"
                            }
                        // }
                    }
                })
            }

        })
    }