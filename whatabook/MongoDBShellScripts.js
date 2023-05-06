/*
============================================
; Title: WhatABook
; Author: The Griff Group
; Date: 05/06/2023
; Modified By: Walker, Gopin, and Brooks
; Description:  MongoDB Shell Scripts for books and customers collections.
============================================
*/ 


// Delete the books and customers collections.
db.books.drop();
db.customers.drop();

// Create the books collection using Document Validation.
db.createCollection("books", {
    validator: { $jsonSchema: {
        bsonType: "object",
        properties: {
            title: {
                bsonType: "string"
            },
            genre: {
                bsonType: "string"
            },
            author: {
                bsonType: "string"
            },
            bookId: {
                bsonType: "string"
            }
        }
    }}
});

// Create the customers collection using Document Validation.
db.createCollection("customers", {
    validator: { $jsonSchema: {
        bsonType: "object",
        properties: {
            firstName: {
                bsonType: "string"
            },
            lastName: {
                bsonType: "string"
            },
            customerId: {
                bsonType: "string"
            },
            wishlist: {
                bsonType: "array"
            },
        }
    }}
});




// Books
catcherInTheRye = {
    "title": "The Catcher in the Rye",
    "genre": "Fiction",
    "author": "J.D. Salinger",
    "bookId": "1234"  
}

toKillAMockingbird = {
    "title": "To Kill a Mockingbird",
    "genre": "Fiction",
    "author": "Harper Lee",
    "bookId": "91011"  
}

greatGatsby = {
    "title": "The Great Gatsby",
    "genre": "Fiction",
    "author": "F. Scott Fitzgerald",
    "bookId": "121314"  
}

mongoDG = {
    "title": "MongoDB The Definitive Guide",
    "genre": "Non-Fiction",
    "author": "Shannon Bradshaw",
    "bookId": "954461"
}

// Insert the documents.
db.books.insertOne(catcherInTheRye);
db.books.insertOne(toKillAMockingbird);
db.books.insertOne(greatGatsby);
db.books.insertOne(mongoDG);



// Customers
alice = {
    "firstName": "Alice",
    "lastName": "Smith",
    "customerId": "c1007",
    "wishlist": [{
        title: "The Catcher in the Rye",
        genre: "Fiction",
        author: "J.D. Salinger",
        bookId: "1234" 
    },]
}

karen = {
    "firstName": "Karen",
    "lastName": "Smith",
    "customerId": "c1008",
    "wishlist": [{
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        author: "Harper Lee",
        bookId: "91011" 
    },{
        title: "The Catcher in the Rye",
        genre: "Fiction",
        author: "J.D. Salinger",
        bookId: "1234" 
    },]    
}

ashley = {
    "firstName": "Ashley",
    "lastName": "Smith",
    "customerId": "c1009",
    "wishlist": [{
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        author: "Harper Lee",
        bookId: "91011" 
    },{
        title: "The Catcher in the Rye",
        genre: "Fiction",
        author: "J.D. Salinger",
        bookId: "1234" 
    },{
        title: "MongoDB The Definitive Guide",
        genre: "Non-Fiction",
        author: "Shannon Bradshaw",
        bookId: "954461"
    },]    
}

// Insert the document. 
db.customers.insertOne(alice);
db.customers.insertOne(karen);
db.customers.insertOne(ashley);

