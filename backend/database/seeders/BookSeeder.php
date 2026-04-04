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
    }
}
