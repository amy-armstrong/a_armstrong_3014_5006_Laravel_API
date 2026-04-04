const BASE_URL = "http://xp-bar.ca/api/books";

export function fetchBooks() {
    return fetch(BASE_URL)
        .then(res => {
            if(!res.ok) throw new Error("Failed to fetch the books");
            return res.json();
        });
}

export function fetchBookDetails(id) {
    return fetch(`${BASE_URL}/${id}`)
        .then(res => {
            if(!res.ok) throw new Error("Failed to fetch book details");
            return res.json();
        });
}