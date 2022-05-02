var searchBtn = document.getElementById('search-btn');
var searchText = document.getElementById('autocomplete-input')
var podcastImage1 = document.getElementById('image-1')
var podcastLink1 = document.getElementById('pod-link-1')
var podcastTitle1 = document.getElementById('title-1')
var podcastImage2 = document.getElementById('image-2')
var podcastLink2 = document.getElementById('pod-link-2')
var podcastTitle2 = document.getElementById('title-2')
var podcastImage3 = document.getElementById('image-3')
var podcastLink3 = document.getElementById('pod-link-3')
var podcastTitle3 = document.getElementById('title-3')

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
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

        podcastImage1.setAttribute('src', json.results[0].artworkUrl600);
        podcastLink1.setAttribute('href', json.results[0].collectionViewUrl);
        podcastTitle1.textContent = json.results[0].collectionName;
        podcastImage2.setAttribute('src', json.results[1].artworkUrl600);
        podcastLink2.setAttribute('href', json.results[1].collectionViewUrl);
        podcastTitle2.textContent = json.results[1].collectionName;
        podcastImage3.setAttribute('src', json.results[2].artworkUrl600);
        podcastLink3.setAttribute('href', json.results[2].collectionViewUrl);
        podcastTitle3.textContent = json.results[2].collectionName;
    
    })
}
