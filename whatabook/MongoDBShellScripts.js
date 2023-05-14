/*
============================================
; Title: WhatABook
; Author: The Griff Group
; Date: 05/06/2023
; Modified By: Walker, Gopin, and Brooks
; Description:  MongoDB Shell Scripts for books and customers collections.
============================================
*/

const booksData = [
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    author: "J.D. Salinger",
    bookId: "1234",
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    author: "Harper Lee",
    bookId: "91011",
  },
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    author: "F. Scott Fitzgerald",
    bookId: "121314",
  },
  {
    title: "MongoDB The Definitive Guide",
    genre: "Non-Fiction",
    author: "Shannon Bradshaw",
    bookId: "954461",
  },
];

const customersData = [
  {
    firstName: "Alice",
    lastName: "Smith",
    customerId: "c1007",
    wishlist: [
      {
        title: "The Catcher in the Rye",
        genre: "Fiction",
        author: "J.D. Salinger",
        bookId: "1234",
      },
    ],
  },
  {
    firstName: "Karen",
    lastName: "Smith",
    customerId: "c1008",
    wishlist: [
      {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        author: "Harper Lee",
        bookId: "91011",
      },
      {
        title: "The Catcher in the Rye",
        genre: "Fiction",
        author: "J.D. Salinger",
        bookId: "1234",
      },
    ],
  },
  {
    firstName: "Ashley",
    lastName: "Smith",
    customerId: "c1009",
    wishlist: [
      {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        author: "Harper Lee",
        bookId: "91011",
      },
      {
        title: "The Catcher in the Rye",
        genre: "Fiction",
        author: "J.D. Salinger",
        bookId: "1234",
      },
      {
        title: "MongoDB The Definitive Guide",
        genre: "Non-Fiction",
        author: "Shannon Bradshaw",
        bookId: "954461",
      },
    ],
  },
];

function insertDocuments(collection, documents) {
  console.log(`Inserting ${documents.length} documents into collection...`);
  const bulkOperations = documents.map((doc) => ({
    insertOne: { document: doc },
  }));
  return collection.bulkWrite(bulkOperations, (error, result) => {
    if (error) {
      console.error("Error inserting documents:", error);
    } else {
      console.log(`${result.insertedCount} documents inserted.`);
    }
  });
}


// Delete existing collections
console.log("Deleting existing collections...");
db.books.drop();
db.customers.drop();
console.log("Existing collections deleted.");

// Create the books collection with validation
console.log("Creating books collection...");
db.createCollection("books", {
  validator: {
    $jsonSchema: {
      // Schema definition...
    },
  },
});
console.log("Books collection created.");

// Create the customers collection with validation
console.log("Creating customers collection...");
db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      // Schema definition...
    },
  },
});
console.log("Customers collection created.");

// Get references to the collections
const booksCollection = db.books;
const customersCollection = db.customers;

// Insert documents into the collections...
console.log("Inserting book documents...");
insertDocuments(booksCollection, booksData);

console.log("Inserting customer documents...");
insertDocuments(customersCollection, customersData);

/*
  .then(() => {
    console.log("Book documents inserted successfully.");

    console.log("Inserting customer documents...");
    return insertDocuments(customersCollection, customersData);
  })
  .then(() => {
    console.log("Customer documents inserted successfully.");

    // Perform additional operations or return a response if needed
  })
  .catch((error) => {
    console.error("Error inserting documents:", error);
  });
*/