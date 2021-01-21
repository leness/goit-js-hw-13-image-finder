import './styles.css';
import NewsApiService from './js/apiService';
import LoadMoreBtn from './js/load-more-btn';
import refs from './js/refs';
import hitsTemplates from './templates/photo_card.hbs';



const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});
console.log(loadMoreBtn);

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch)
loadMoreBtn.refs.button.addEventListener('click', fetchHits)


function onSearch(evt) {
    evt.preventDefault();    
    newsApiService.query = evt.currentTarget.elements.query.value;
    
    loadMoreBtn.show();
    newsApiService.resetPage();
    clearHitsContainer();
    fetchHits();
}

function fetchHits() {
    loadMoreBtn.disable();
    newsApiService.fetchGallery().then(hits => {
        appendHitsMarkup(hits);
        loadMoreBtn.enable();
    })    
}

function appendHitsMarkup(hits) {
    refs.galleryList.insertAdjacentHTML('beforeend', hitsTemplates(hits))
    window.scrollBy({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
}

function clearHitsContainer() {
    refs.galleryList.innerHTML = '';
}

