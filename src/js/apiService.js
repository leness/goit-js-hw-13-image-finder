const Api_KEY = `19306593-eb1bd0744257425a919db49fe`
const BASE_URL = `https://pixabay.com`

export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.perpage = 12;
    }

    fetchGallery() {
        console.log(this);
        const url = `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${this.perpage}&key=${Api_KEY}`
        
        return fetch(url)
        .then(r => r.json())
            .then(({hits}) => {
                this.incrementPage();
                
                return hits;
        })
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}


