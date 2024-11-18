export class Store {
    constructor() {
        this.watchlist = JSON.parse(localStorage.getItem('watchlist')) || []
    }

    getStorage() {
        JSON.parse(localStorage.getItem('watchlist'))
    }

    setStorage(data) {
        return localStorage.setItem('watchlist', JSON.stringify(data))
    }
}