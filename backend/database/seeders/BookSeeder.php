<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book; // <--- IMPORTANT

class BookSeeder extends Seeder
{
    public function run(): void
    {
        Book::create([
            'title' => 'The Great Gatsby',
            'author_id' => 1,
            'published_year' => 1925,
            'description' => 'A story of wealth and love.'
        ]);

        Book::create([
            'title' => "Harry Potter and the Philosopher's Stone",
            'author_id' => 1,
            'published_year' => 1997,
            'description' => 'The boy who lived starts his journey at Hogwarts.'
        ]);

        Book::create([
            'title' => "Harry Potter and the Chamber of Secrets",
            'author_id' => 1,
            'published_year' => 1998,
            'description' => 'A mysterious diary and a giant snake.'
        ]);

        Book::create([
            'title' => "The Great Gatsby",
            'author_id' => 2,
            'published_year' => 1925,
            'description' => 'A classic tale of the American Dream.'
        ]);
    }
}
