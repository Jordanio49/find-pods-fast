var searchBtn = document.getElementById('search button element');
var searchText = document.getElementById('search textarea');


var searchPods = function() {
    searchBtn.addEventListener('click', function(event) {
        event.preventDefault();
        
        const podcastApi = require('podcast-api');
        
        const apiUrl = podcastApi({API key here});
        apiUrl.fetchBestPodcast({
            name: 'searchText.textcontent'
            genre-id: ''
            page: 
            region: 'us'
            

        })
    })
}