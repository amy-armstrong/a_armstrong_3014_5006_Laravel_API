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
        this.getBooks()
    },
    methods: {
        getBooks() {
            // will be local host/point to laravel api
            fetch("http://xp-bar.ca/api/books")
            .then(res => {
                if(!res.ok) {
                    throw new Error("Failed to fetch the books");
                }
                return res.json()
            })
            .then(books => {
                this.booksData = books.data
            })
            .catch(err => {
                this.error = err.message;
            })
            .finally(()=>{
                this.loadingBooks = false;
            })
        },

        getBook(id) {
            this.loadingBookDetails = true;
            this.error = null;
            this.selectedBooks = null;

            fetch(`http://xp-bar.ca/api/books/${id}`)
            .then(res => {
                if(!res.ok){
                    throw new Error("Failed to fetch book details")
                }
                return res.json();
            })
            .then(book => {
                if(!book.data) {
                    throw new Error("Sorry we are unable to find the book you requested.")
                }

                const bookData = book.data

                this.selectedBooks = {
                    author: bookData.author.name || "Not available",
                    published: bookData.published || "Not available",
                    description: bookData.description || "Not available",
                    image_url: bookData.image_url || ""
                }

                this.$nextTick(()=> {
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth'
                    });

                    gsap.from(this.$refs.bookInfoCon, {
                        opacity: 0,
                        y: 20,
                        duration: 2,
                        ease: "power2.out"
                    })
                })
            })
            .catch(err => {
                this.error = err.message;
            })
            .finally(()=>{
                this.loadingBookDetails = false;
            });
        }
    }
})
.mount("#app");