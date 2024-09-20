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

![Screenshot 2024-09-20 204516](https://github.com/user-attachments/assets/75764550-198d-4f7a-8193-c1b36a704b9b)
![Screenshot 2024-09-20 204841](https://github.com/user-attachments/assets/45909867-5d8d-4354-979d-9ad4c58a8213)
![Screenshot 2024-09-20 204901](https://github.com/user-attachments/assets/a7c83598-3966-4d39-abc0-dd0220976769)
![Screenshot 2024-09-20 204947](https://github.com/user-attachments/assets/18d0090c-bc75-4e3f-a1c2-b3ebae9b8982)
![Screenshot 2024-09-20 205010](https://github.com/user-attachments/assets/3814a960-3cea-42e3-8eee-5fe0bf343db4)

