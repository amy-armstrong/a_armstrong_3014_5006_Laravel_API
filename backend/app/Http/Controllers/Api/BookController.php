<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    // displau books
   public function index()
{
    // This fetches EVERY book in the table
    return \App\Models\Book::all();
}

    //display specfiifc book
    public function show(Book $book)
    {
        // this returns the single book and its author details
        return $book->load('author');
    }

    //update the specified book
    public function update(Request $request, Book $book)
    {
        $book->update($request->all());
        return response()->json($book);
    }


    //deeletes the specified book from storage
    public function destroy(Book $book)
    {
        $book->delete();
        return response()->json(['message' => 'Book deleted successfully']);
    }

    public function store(Request $request)
{
    // validate the incoming data
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'author_id' => 'required|integer',
        'published_year' => 'required|integer',
        'description' => 'required|string',
    ]);

    // create the book 
    $book = \App\Models\Book::create($validated);

    // return the  book as JSON
    return response()->json($book, 201);
}
}
