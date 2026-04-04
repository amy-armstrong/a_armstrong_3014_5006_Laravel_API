# 3014 5006 Laravel API

A web application designed to manage a library of bookss. This project demonstrates a integration between a **Laravel 11 REST API** and a **Vue 3** frontend.

## Tech Stack

* **Frontend:** Vue 3 (Composition API), CSS Grid, GSAP (GreenSock Animation Platform)
* **Backend:** Laravel 11, PHP 8.x, Eloquent ORM
* **Database:** MySQL (via MAMP)

---

##  Features

* **RESTful API:** Structured JSON endpoints for authors and books.
* **Database Migrations:** Version-controlled schema ensuring data integrity.
* **Automated Seeding:** Dynamic data population via `AuthorSeeder` and `BookSeeder`.
* **Reactive UI:** Real-time data fetching and state management without page reloads.
* **Motion Design:** GSAP staggered animations for list loading and detail views.

---

##  Usage Guide

### 1. Interacting with the API
The backend is configured as a headless REST API. You can test the endpoints using a browser or a tool like Postman:

* **View All Books:** `GET http://127.0.0.1:8000/api/books`
* **View Single Book:** `GET http://127.0.0.1:8000/api/books/{id}`
* **View All Authors:** `GET http://127.0.0.1:8000/api/authors`

### 2. Frontend Navigation
Once the Laravel server is running and the `index.html` is open:
* **List View:** The sidebar will automatically populate with titles from the database.
* **Detailed View:** Click any book title to trigger a Vue state update. This fetches the specific book details (Author, Year, Description) and displays them in the main content area.
* **Animations:** Notice the GSAP staggers when the archive list first loads and the smooth transitions when switching between book details.

### 3. Data Management (Seeders)
To update the archive content:
1.  Open `database/seeders/BookSeeder.php`.
2.  Add a new `Book::create([...])` block.
3.  Refresh the database by running:
    ```bash
    php artisan migrate:fresh --seed
    ```

##  Project Structure

```text
/backend                  # Laravel 11 API
  ├── app/Models/         # Eloquent Models (Book, Author)
  ├── database/migrations # Database Blueprints
  ├── database/seeders/   # Data Population Scripts
  └── routes/api.php      # API Routing (/api/books)

/frontend                 # Vue 3 Client
  ├── css/                # Grid and Portfolio Styling
  ├── js/main.js          # Vue Logic & Fetch Requests
  └── index.html          # Main Archive Interface

---

