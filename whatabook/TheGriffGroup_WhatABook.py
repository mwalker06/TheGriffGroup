"""

    Title: TheGriffGroup_WhatABook
    Author: Walker, Gopin, and Brooks
    Date: 05/06/2023
    Description: Python Console Application

"""

import os

# import the MongoClient
from pymongo import MongoClient

# build a connection string to connect to
client = MongoClient('mongodb+srv://web335_user:s3cret@bellevueuniversity.kqpr8ra.mongodb.net/?retryWrites=true&w=majority')

# configure a variable to access the web335DB
db = client['web335DB']



# Display a list of books. Format the output so it is easy to read.
def books():

    books = db.books.find({}, {'_id':0,'title':1,'genre':1,'author':1})

    for book in books:
        print(f"\n{book}")

    os.system('pause')



# Display a list of books by Genre. For this requirement, supply the user 
# with a list of genre choices and display the appropriate books based on 
# their selection.
def genre():

    selection = input(f"\n\t-'fiction'\n\t-'non-fiction'\n\nPlease make a selection: ")

    if selection == 'quit':
        active = False

    elif selection == 'fiction':
        for book in db.books.find({'genre': 'Fiction'},{'_id':0,'title':1, 'author': 1}):
            
            print(f"\n{book}")

        os.system('pause')

    elif selection == 'non-fiction':
        for book in db.books.find({'genre': 'Non-Fiction'},{'_id':0,'title':1, 'author': 1}):
            
            print(f"\n{book}")

        os.system('pause')

    else:
        print(f"\n\t{(selection.upper())}, is an invalid selection.\n\tPlease try your selection again.\n")

        os.system('pause')



# Display a customers wishlist by customerId. For this requirement, prompt the 
# user to enter a customerId (c1007, c1008, or c1009) and display the 
# appropriate wishlist.
def search():

    user = input("please enter your customerId: ")

    if db.customers.count_documents({"customerId": user}) > 0:
        for book in db.customers.find({"customerId": user},{'_id':0,'firstName':1, 'lastName': 1, 'wishlist.title': True, 'wishlist.author': True}):
            print(book)

            os.system('pause')

    else:
        print(f"\n\t{(user.upper())} is not a registered user.\n\tPlease try again.\n")

        os.system('pause')



greeting = f"\n\tWhat_A_Book\n\n\tPython_Console\n\t\nPlease make a selection:\n\n-To end program, Enter 'quit'\n-To list all books, Enter 'books'\n-To see books listed by genre, Enter 'genre'\n-Display customer wishlist by customerId, Enter 'search'\n\nPlease enter command: "



active = True

while active: 
    message = input(greeting)

    if message == 'quit':
        active = False

    elif message == 'books':
        books()

    elif message == 'genre':
        genre()

    elif message == 'search':
        search()

    else: 
        print(f"\n\t{(message.upper())}, is not a working command.\n\tPlease try again.\n")

        os.system('pause')

