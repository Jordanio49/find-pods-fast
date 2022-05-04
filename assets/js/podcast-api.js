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
            // console.log(json)
            // console.log(json.results[0].genres)
            // console.log(json.results[0].collectionViewUrl)
            // console.log(json.results[0].artworkUrl100)
            // console.log(json.results[0].collectionName)
            // console.log(json.results[0].feedUrl)

            for (let i = 0; i < json.results.length; i++) {
                var podcastNames = json.results[i].collectionName;
                var podcastLinks = json.results[i].collectionViewUrl;
                var podcastImages = json.results[i].artworkUrl600;
                // console.log(podcastNames)

                var podcastTitle = document.getElementById('title-' + [i])
                var podcastLink = document.getElementById('pod-link-' + [i])
                var podcastImage = document.getElementById('image-' + [i])
                podcastTitle.textContent = podcastNames
                podcastLink.setAttribute('href', podcastLinks)
                podcastImage.setAttribute('src', podcastImages)
            }

            $.ajax({
                type: "GET",
                url: "https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=hVqnL1G7fRfOFT0cqthaFdUpZ5C4mZJ8&size=100&classificationName=podcast",
                async: true,
                dataType: "json",
                success: function (json) {
                    console.log(json);
                    for (let i = 0; i < json._embedded.attractions.length; i++) {
                        var livePodcasts = json._embedded.attractions[i].name
                        // console.log(livePodcasts)
                        if (livePodcasts === podcastNames) {
                            console.log(livePodcast)
                        }
                    }
                }
            })
        })
}