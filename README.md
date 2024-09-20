### Project Overview: Online Library

The project is an online library application built with Angular and TypeScript. It allows users to manage their book collection conveniently, search for books using the Google Books API, and customize their experience with settings like dark mode.

### Project Structure

1. **Components**
   - **Header**: 
     - Displays the library name and navigation links (Home, Add Book, In Library, Search for Book, Settings).
   - **Home**: 
     - The main page showcasing the library and the key features of the application.
   - **Add Book**: 
     - A form that allows users to input book details (such as title, author, etc.) to add to the library.
   - **In Library**: 
     - Displays a list of all the books currently in the library, with options to view details and manage the collection.
   - **Search for Book**: 
     - Allows users to search for books by title using the Google Books API (`https://www.googleapis.com/books/v1/volumes?q=`) and displays the results.
   - **Settings**: 
     - Allows users to adjust application settings, including switching between light and dark mode.

2. **Services**
   - **BookService**: 
     - Responsible for the logic of adding books, fetching data from the Google Books API, and managing the library's book collection.

### Technologies Used
- **TypeScript**: Provides strong typing and better code organization.
- **Angular**: For developing components and managing data flow.
- **CSS/SCSS**: For styling the interface, including dark mode support.


