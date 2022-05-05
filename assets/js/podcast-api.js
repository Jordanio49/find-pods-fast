
var searchBtn = document.getElementById('search-btn');
var searchText = document.getElementById('autocomplete-input')
var searchHistoryEl = document.getElementById('recent-search')

searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    getDataFromItunes();
});

// itunes API for pod info 

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
                // var upcomingShows = document.getElementById('upcoming-shows-' + [i])

                title.textContent = podcastTitles
                link.setAttribute('href', podcastLinks)
                image.setAttribute('src', podcastImages)

                //TRYING TO GET BUTTONS!!!
                // var genre;  
                // if(event.target.value != "" ) {
                //         genre = event.target.value;
                //     }
                //     else{
                //         storeGenre.push(searchText.value);
                //         localStorage.setItem('genre', JSON.stringify(storeGenre));
                //         genre=searchText.value;
                //         if(storeGenre.includes(genre) == false ) {
                //             var btn = document.createElement("button");
                //             btn.innerText = genre;
                //             btn.value = genre;
                //             btn.addEventListener('click', getDataFromItunes)
                //             searchHistoryEl.appendChild(btn);
                //             var br = document.createElement("br");
                //             searchHistoryEl.appendChild(br);
                //         }
                //     }  


                //this is for the tickmaster API
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
    

let storeGenre = JSON.parse(localStorage.getItem('genre')) || [];

for (let i = 0; i < storeGenre.length; i++) {
    var btn = document.createElement("button");
    btn.innerText = storeGenre[i];
    btn.value = storeGenre[i];
    btn.addEventListener('click', getDataFromItunes)
    searchHistoryEl.appendChild(btn);
    var br = document.createElement("br");
    searchHistoryEl.appendChild(br);
}


//TRYING TO SAVE TO LOCAL STORAGE
function storeData(genreName) {
    let genreObject = {
        genreName: "",
    }
    genreObject.genreName = searchText.value
}


// var genre; {
//     if(e.target.value != "" ) {
//         genre = event.target.value;
//     }
//     else{
//         storeGenre.push(searchText.value);
//         localStorage.setItem('genre'), JSON.stringify(storeGenre);
//         genre=searchText.value;
//         if(storeGenre.includes(genre) == false ) {
//             var btn = document.createElement("button");
//             btn.innerText = genre;
//             btn.value = genre;
//             btn.addEventListener('click', getDataFromItunes);
//             searchHistoryEl.appendChild(btn);
//             var br = document.createElement("br");
//             searchHistoryEl.appendChild(br);
//         }


//     }




// var searchBtn = document.getElementById('search-btn');
// var searchText = document.getElementById('autocomplete-input')
// var podcastImage1 = document.getElementById('image-1')
// var podcastLink1 = document.getElementById('pod-link-1')
// var podcastTitle1 = document.getElementById('title-1')
// var podcastImage2 = document.getElementById('image-2')
// var podcastLink2 = document.getElementById('pod-link-2')
// var podcastTitle2 = document.getElementById('title-2')
// var podcastImage3 = document.getElementById('image-3')
// var podcastLink3 = document.getElementById('pod-link-3')
// var podcastTitle3 = document.getElementById('title-3')
// var podcastImage4 = document.getElementById('image-4')
// var podcastLink4= document.getElementById('pod-link-4')
// var podcastTitle4 = document.getElementById('title-4')
// var podcastImage5 = document.getElementById('image-5')
// var podcastLink5 = document.getElementById('pod-link-5')
// var podcastTitle5 = document.getElementById('title-5')
// var podcastImage6 = document.getElementById('image-6')
// var podcastLink6 = document.getElementById('pod-link-6')
// var podcastTitle6 = document.getElementById('title-6')
// var podcastImage7 = document.getElementById('image-7')
// var podcastLink7 = document.getElementById('pod-link-7')
// var podcastTitle7 = document.getElementById('title-7')
// var podcastImage8 = document.getElementById('image-8')
// var podcastLink8 = document.getElementById('pod-link-8')
// var podcastTitle8 = document.getElementById('title-8')
// var searchHistoryEl = document.getElementById('recent-search')


// searchBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     getDataFromItunes()
// })


// function getDataFromItunes() {

//     var apiUrl = 'https://itunes.apple.com/search?term=' + searchText.value + '&entity=podcast'
//     fetch(apiUrl)
//     .then(data => data.json())
//     .then(json => {
//         console.log(json)
//         console.log(json.results[0].genres)
//         console.log(json.results[0].collectionViewUrl)
//         console.log(json.results[0].artworkUrl100)
//         console.log(json.results[0].collectionName)
//         console.log(json.results[0].feedUrl)
     
     

//         podcastImage1.setAttribute('src', json.results[0].artworkUrl600);
//         podcastLink1.setAttribute('href', json.results[0].collectionViewUrl);
//         podcastTitle1.textContent = json.results[0].collectionName;
//         podcastImage2.setAttribute('src', json.results[1].artworkUrl600);
//         podcastLink2.setAttribute('href', json.results[1].collectionViewUrl);
//         podcastTitle2.textContent = json.results[1].collectionName;
//         podcastImage3.setAttribute('src', json.results[2].artworkUrl600);
//         podcastLink3.setAttribute('href', json.results[2].collectionViewUrl);
//         podcastTitle3.textContent = json.results[2].collectionName;
//         podcastImage4.setAttribute('src', json.results[3].artworkUrl600);
//         podcastLink4.setAttribute('href', json.results[3].collectionViewUrl);
//         podcastTitle4.textContent = json.results[3].collectionName;
//         podcastImage5.setAttribute('src', json.results[4].artworkUrl600);
//         podcastLink5.setAttribute('href', json.results[4].collectionViewUrl);
//         podcastTitle5.textContent = json.results[4].collectionName;
//         podcastImage6.setAttribute('src', json.results[5].artworkUrl600);
//         podcastLink6.setAttribute('href', json.results[5].collectionViewUrl);
//         podcastTitle6.textContent = json.results[5].collectionName;
//         podcastImage7.setAttribute('src', json.results[6].artworkUrl600);
//         podcastLink7.setAttribute('href', json.results[6].collectionViewUrl);
//         podcastTitle7.textContent = json.results[6].collectionName;
//         podcastImage8.setAttribute('src', json.results[7].artworkUrl600);
//         podcastLink8.setAttribute('href', json.results[7].collectionViewUrl);
//         podcastTitle8.textContent = json.results[7].collectionName;

     
//     })

    
// }


// }