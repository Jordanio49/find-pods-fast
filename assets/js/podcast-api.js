var searchBtn = document.getElementById('search-btn');
var searchText = document.getElementById('autocomplete-input')

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    getApiData()
})

function getApiData() {
    var podcastTitles = []
    var showTitles = []

    var appleApiUrl = 'https://itunes.apple.com/search?term=' + searchText.value + '&entity=podcast&limit=8'
    fetch(appleApiUrl)
        .then(data => data.json())
        .then(json => {
            for (let i = 0; i < json.results.length; i++) {
                podcastTitles.push(json.results[i].collectionName);
                // podcastTitles = json.results[i].collectionName;
                var podcastLinks = json.results[i].collectionViewUrl;
                var podcastImages = json.results[i].artworkUrl600;
                var title = document.getElementById('title-' + [i])
                var link = document.getElementById('pod-link-' + [i])
                var image = document.getElementById('image-' + [i])
                // var upcomingShows = document.getElementById('upcoming-shows-' + [i])
                title.textContent = podcastTitles[i]
                link.setAttribute('href', podcastLinks)
                image.setAttribute('src', podcastImages)
            }
        })

        console.log(podcastTitles)
        var ticketmasterApiUrl = "https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=hVqnL1G7fRfOFT0cqthaFdUpZ5C4mZJ8&size=100&classificationName=podcast"
        fetch(ticketmasterApiUrl)
            .then(data => data.json())
            .then(json => {
                // console.log(json)
                for (let i = 0; i < json._embedded.attractions.length; i++) {
                    showTitles.push(json._embedded.attractions[i].name)
                }
            })
            console.log(showTitles)

           for (i = 0; i < showTitles.length; i++) {
            if (showTitles[i] == podcastTitles[3])
                console.log('It works')
           }
};