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
var podcastImage4 = document.getElementById('image-4')
var podcastLink4= document.getElementById('pod-link-4')
var podcastTitle4 = document.getElementById('title-4')
var podcastImage5 = document.getElementById('image-5')
var podcastLink5 = document.getElementById('pod-link-5')
var podcastTitle5 = document.getElementById('title-5')
var podcastImage6 = document.getElementById('image-6')
var podcastLink6 = document.getElementById('pod-link-6')
var podcastTitle6 = document.getElementById('title-6')
var podcastImage7 = document.getElementById('image-7')
var podcastLink7 = document.getElementById('pod-link-7')
var podcastTitle7 = document.getElementById('title-7')
var podcastImage8 = document.getElementById('image-8')
var podcastLink8 = document.getElementById('pod-link-8')
var podcastTitle8 = document.getElementById('title-8')

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
        podcastImage4.setAttribute('src', json.results[3].artworkUrl600);
        podcastLink4.setAttribute('href', json.results[3].collectionViewUrl);
        podcastTitle4.textContent = json.results[3].collectionName;
        podcastImage5.setAttribute('src', json.results[4].artworkUrl600);
        podcastLink5.setAttribute('href', json.results[4].collectionViewUrl);
        podcastTitle5.textContent = json.results[4].collectionName;
        podcastImage6.setAttribute('src', json.results[5].artworkUrl600);
        podcastLink6.setAttribute('href', json.results[5].collectionViewUrl);
        podcastTitle6.textContent = json.results[5].collectionName;
        podcastImage7.setAttribute('src', json.results[6].artworkUrl600);
        podcastLink7.setAttribute('href', json.results[6].collectionViewUrl);
        podcastTitle7.textContent = json.results[6].collectionName;
        podcastImage8.setAttribute('src', json.results[7].artworkUrl600);
        podcastLink8.setAttribute('href', json.results[7].collectionViewUrl);
        podcastTitle8.textContent = json.results[7].collectionName;
    })
}
