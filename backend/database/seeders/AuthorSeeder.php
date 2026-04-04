<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Author; 

class AuthorSeeder extends Seeder
{
    public function run(): void
    {
        Author::create(['name' => 'F. Scott Fitzgerald', 'bio' => 'Jazz Age novelist.']);
        Author::create(['name' => 'George Orwell', 'bio' => 'Dystopian novelist.']);
    }
}
