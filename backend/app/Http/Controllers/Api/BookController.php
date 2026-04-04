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
        return Book::with('author')->get();
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
}
