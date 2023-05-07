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

// Insert documents using bulk write operation
function insertDocuments(collection, documents) {
  const bulkOperations = documents.map((doc) => ({
    insertOne: { document: doc },
  }));
  return collection.bulkWrite(bulkOperations);
}

// Delete existing collections
db.books.drop();
db.customers.drop();

// Create the books collection with validation
db.createCollection("books", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        title: { bsonType: "string" },
        genre: { bsonType: "string" },
        author: { bsonType: "string" },
        bookId: { bsonType: "string" },
      },
    },
  },
});

// Create the customers collection with validation
db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        firstName: { bsonType: "string" },
        lastName: { bsonType: "string" },
        customerId: { bsonType: "string" },
        wishlist: { bsonType: "array" },
      },
    },
  },
});

// Get references to the collections
const booksCollection = db.books;
const customersCollection = db.customers;

// Insert documents into the collections
insertDocuments(booksCollection, booksData)
  .then(() => {
    // Insert the book documents completed successfully
    console.log("Book documents inserted successfully.");

    // Proceed to insert customer documents
    return insertDocuments(customersCollection, customersData);
  })
  .then(() => {
    // Insert the customer documents completed successfully
    console.log("Customer documents inserted successfully.");

    // Perform additional operations or return a response if needed
  })
  .catch((error) => {
    // Handle any errors that occurred during the insertion
    console.error("Error inserting documents:", error);
  });
