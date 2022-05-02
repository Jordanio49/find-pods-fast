var searchBtn = document.getElementById('search-btn');
var searchText = document.getElementById('autocomplete-input')
var podcastImage = document.getElementById('image')

searchBtn.addEventListener('click', (e) => {
    getDataFromItunes()
})


function getDataFromItunes() {
    var apiUrl = 'https://itunes.apple.com/search?term=' + searchText.value + '&entity=podcast'
    fetch(apiUrl)
    .then(data => data.json())
    .then(json => {
        console.log(json)
        console.log(json.results[0].genres)
        console.log(json.results[0].collectionViewUrl)
        console.log(json.results[0].artworkUrl100)
        console.log(json.results[0].collectionName)
        console.log(json.results[0].feedUrl)

        var picture = json.results[0].artworkUrl100
        podcastImage.innerHtml = "<img src='" + picture + "'>";
    })
}
