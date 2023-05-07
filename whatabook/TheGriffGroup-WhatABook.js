/*
============================================
; Title: WhatABook
; Author: The Griff Group
; Date: 05/06/2023
; Modified By: Walker, Gopin, and Brooks
; Description: Queries. 
============================================
*/ 


// mongosh "mongodb+srv://bellevueuniversity.kqpr8ra.mongodb.net/web335DB" --apiVersion 1 --username web335_user


load('MongoDBShellScripts.js');


// 1. Display a list of books.
db.books.find();


// 2. Display a list of books by genre.
db.books.find({ genre: "Fiction" });

// 3. Display a list of books by author.
db.books.find({ author: "F. Scott Fitzgerald" });


// 4. Display a book by bookId.
db.books.find({ bookId: "91011" });


// 5. Display a wishlist by customerId.
db.customers.findOne({"customerId": "c1008"}, { firstName:1,lastName:1, wishlist:true });


// 6. Add books to a customer’s wishlist.
db.customers.updateOne({ "customerId": "c1007" }, { $push: { wishlist: { title: "The Great Gatsby", genre: "Fiction", author: "F. Scott Fitzgerald", bookId: "121314" } } });


// 7. Remove book from a customer’s wishlist.
db.customers.updateOne({ "customerId": "c1007" }, { $pull: { wishlist: { "bookId": "121314" }} });

