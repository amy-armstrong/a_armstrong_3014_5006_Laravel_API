import { fetchBooks, fetchBookDetails } from './api.js';

const app = Vue.createApp({
    data() {
        return {
            booksData: [],
            error: null,
            selectedBooks: null,
            loadingBooks: true,
            loadingBookDetails: false
        }
    },
    created() {
        this.getBooks();
    },
    methods: {
        getBooks() {
            this.loadingBooks = true;
            this.error = null;

            fetchBooks()
                .then(books => {
                    this.booksData = books.data;
                    
                    // Runs afteer the list is fetched and rendered
                    this.$nextTick(() => {
                        gsap.from(".book-item", {
                            opacity: 0,
                            x: -20,          
                            stagger: 0.1,    
                            duration: 0.8,
                            ease: "power2.out"
                        });
                    });
                    
                })
                .catch(err => {
                    this.error = err.message;
                })
                .finally(() => {
                    this.loadingBooks = false;
                });
        },

        getBook(id) {
            this.loadingBookDetails = true;
            this.error = null;
            this.selectedBooks = null; 

            fetchBookDetails(id)
                .then(book => {
                    if(!book.data) {
                        throw new Error("Archive entry not found.");
                    }

                    const bookData = book.data;

                    this.selectedBooks = {
                        author: bookData.author.name || "Not available",
                        published: bookData.published || "Not available",
                        description: bookData.description || "Not available",
                        image_url: bookData.image_url || ""
                    };

                    // runs when a user selects a specific book
                    this.$nextTick(() => {
                        window.scrollTo({
                            top: document.body.scrollHeight,
                            behavior: 'smooth'
                        });

                        // animates container
                        gsap.from(this.$refs.bookInfoCon, {
                            opacity: 0,
                            y: 30,          
                            duration: 1.2, 
                            ease: "expo.out" 
                        });
                    });
                })
                .catch(err => {
                    this.error = err.message;
                })
                .finally(() => {
                    this.loadingBookDetails = false;
                });
        }
    }
});

app.mount("#app");