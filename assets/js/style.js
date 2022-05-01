var searchFormEl = document.getElementById('search-form');
var searchInputEl = document.getElementById('autocomplete-input');
var searchBtnEl = document.getElementById('search-btn');
var searchHistoryEl = document.getElementById('recent-search');
var favesEl = document.getElementById('faves');

searchBtnEl.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(searchInputEl.value)
   
    var listEl = document.createElement('li');
    listEl.innerHTML = "<div >"
    listEl.textContent = searchInputEl.value;
    searchHistoryEl.appendChild(listEl);
    // console.log(searchInputEl.value)
});