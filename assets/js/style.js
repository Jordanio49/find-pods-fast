var searchFormEl = document.getElementById('search-form');
var searchInputEl = document.getElementById('autocomplete-input');
var searchBtnEl = document.getElementById('search-btn');
var searchHistoryEl = document.getElementById('recent-search');
var favesEl = document.getElementById('faves');
var stateInputEl = document.getElementById('state-input');

searchBtnEl.addEventListener('click', function(event) {
    event.preventDefault();
    var key = searchInputEl.value;
    var value = stateInputEl.value;
    console.log(searchInputEl.value)
    console.log(stateInputEl.value)
    localStorage.setItem(key, value);
   
    var listEl = document.createElement('li');
    listEl.innerHTML = "<div >"
    listEl.textContent = searchInputEl.value;
    searchHistoryEl.appendChild(listEl);
    // console.log(searchInputEl.value)
});

for (let i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    listEl.innerHTML += '${key} <br />';
    listEl.textContent = searchInputEl.value;
    searchHistoryEl.appendChild(listEl);
}


// key = searchInputEl
// value = 