const searchButton = document.getElementById('search-button');
const clearHistoryButton = document.getElementById('clear-history-button');
const searchInput = document.getElementById('search-input');
const historyList = document.getElementById('history-list');

// Load search history from local storage
function loadSearchHistory() {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    historyList.innerHTML = '';
    history.forEach(term => {
        const li = document.createElement('li');
        li.textContent = term;
        historyList.appendChild(li);
    });
}

// Store search term in local storage
function storeSearchTerm(term) {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if (!history.includes(term)) {
        history.push(term);
        localStorage.setItem('searchHistory', JSON.stringify(history));
    }
    loadSearchHistory();
}

// Clear search history
function clearSearchHistory() {
    localStorage.removeItem('searchHistory');
    loadSearchHistory();
}

// Handle search button click
searchButton.addEventListener('click', () => {
    const term = searchInput.value.trim();
    if (term) {
        storeSearchTerm(term);
        searchInput.value = ''; // Clear input after search
    }
});

// Handle clear history button click
clearHistoryButton.addEventListener('click', clearSearchHistory);

// Load history on page load
loadSearchHistory();
