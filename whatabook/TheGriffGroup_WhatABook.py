"""

    Title: TheGriffGroup_WhatABook
    Author: Walker, Gopin, and Brooks
    Date: 05/06/2023
    Description: Python Console Application

"""
# import statements
import os

# import statements for MongoDB
from pymongo import MongoClient


# configure the connection to the MongoDB cluster
client = MongoClient('mongodb+srv://web335_user:s3cret@bellevueuniversity.kqpr8ra.mongodb.net/?retryWrites=true&w=majority')

# configure a variable to access the web335DB
db = client['web335DB']
books = db.books
customers = db.customers

# Display a list of books
def display_books():
    for book in books.find({}, {'_id': 0, 'title': 1, 'genre': 1, 'author': 1}):
        print(f"\n{book}")
    input("\nPress enter to continue...")

# Display a list of books by genre
def display_books_by_genre():
    selection = input(f"\n\t-'fiction'\n\t-'non-fiction'\n\nPlease make a selection: ")
    if selection == 'quit':
        active = False
    elif selection in ['fiction', 'non-fiction']:
        for book in books.find({'genre': selection.capitalize()}, {'_id': 0, 'title': 1, 'author': 1}):
            print(f"\n{book}")
        input("\nPress enter to continue...")
    else:
        print(f"\n\t'{selection}' is an invalid selection.\n\tPlease try again.\n")
        input("\nPress enter to continue...")

# Display a customer's wishlist by customerId
def display_wishlist_by_customer():
    user = input("Please enter your customerId: ")
    customer = customers.find_one({"customerId": user})
    if customer:
        print(customer)
        input("\nPress enter to continue...")
    else:
        print(f"\n\t'{user}' is not a registered user.\n\tPlease try again.\n")
        input("\nPress enter to continue...")

# Main function to call other functions based on user input
def main():
    active = True
    greeting = (
        f"\n\tWhat_A_Book\n\n\tPython_Console\n\t\nPlease make a selection:\n\n"
        f"- To end the program, enter 'quit'\n"
        f"- To list all books, enter 'books'\n"
        f"- To see books listed by genre, enter 'genre'\n"
        f"- To display a customer's wishlist by customerId, enter 'search'\n\n"
        f"Please enter command: "
    )
    while active:
        message = input(greeting)
        if message == 'quit':
            active = False
        elif message == 'books':
            display_books()
        elif message == 'genre':
            display_books_by_genre()
        elif message == 'search':
            display_wishlist_by_customer()
        else:
            print(f"\n\t'{message}' is not a valid command.\n\tPlease try again.\n")
            input("\nPress enter to continue...")

# Call the main function when the program starts
if __name__ == '__main__':
    main()