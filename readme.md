# 📚 Library Management System API

A RESTful API for managing books in a library, built with **Express**, **TypeScript**, and **MongoDB**. It supports book CRUD operations, borrowing books, and summary analytics using MongoDB aggregation.

---

## 🚀 Features

- ✅ Add, update, and delete books
- ✅ Filter, sort, and paginate books
- ✅ Borrow a book with quantity management
- ✅ Automatically mark books as unavailable when copies run out
- ✅ Aggregated summary of borrowed books (title, ISBN, total quantity)
- ✅ RESTful APIs following industry best practices
- ✅ Proper error handling and response format

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB (Mongoose)
- Dotenv
- ESLint + Prettier (optional)

---

## 📦 Installation & Setup (Local)

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/library-management-system.git
cd library-management-system
```

### 2. Install Dependencies
```bash
npm install
```
### 3. Configure Environment Variables

```bash
# .env
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/LibraryManagementSystem?retryWrites=true&w=majority
```

### 4. Start the Server

```bash
npm run dev
```
Server will start at: http://localhost:5000

### 📡 API Endpoints Overview
---
📘 Books
---

| Method | Route                | Description                          |
| ------ | -------------------- | ------------------------------------ |
| GET    | `/api/books`         | Get all books (filter/sort/paginate) |
| GET    | `/api/books/:bookId` | Get a single book by ID              |
| POST   | `/api/books`         | Create a new book                    |
| PUT    | `/api/books/:bookId` | Update book details                  |
| DELETE | `/api/books/:bookId` | Delete a book                        |

📕 Borrow
------
| Method | Route         | Description                        |
| ------ | ------------- | ---------------------------------- |
| POST   | `/api/borrow` | Borrow a book (with quantity)      |
| GET    | `/api/borrow` | Borrowed books summary (aggregate) |


### ⚙️ Project Structure

```bash
library-management-system/
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
├── dist/
├── node_modules/
├── src/
│   ├── app.ts
│   ├── index.ts
│   ├── config/
│   ├── modules/
│   │   ├── books/
│   │   ├── borrow/
│   │   └── routes/
│   └── utils/

```

### ✅ Sample Request to Borrow a Book
Request
## POST /api/borrow
```json
{
  "book": "6888d6e9d7b12a4d7965055e",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
```
Response
```json 
{
    "success": true,
    "message": "Book borrowed successfully",
    "data": {
        "book": "6888d6e9d7b12a4d7965055e",
        "quantity": 2,
        "dueDate": "2025-07-18T00:00:00.000Z",
        "_id": "688daa42434246a2def4cd03",
        "createdAt": "2025-08-02T06:03:46.480Z",
        "updatedAt": "2025-08-02T06:03:46.480Z",
        "__v": 0
    }
}

```

### ✅ Sample Request to Get Borrowed Books Summary
Request
## GET /api/borrow
```json
{
    "success": true,
    "message": "Borrowed books summary retrieved successfully",
    "data": [
        {
            "totalQuantity": 2,
            "book": {
                "title": "The Theory of Everything",
                "isbn": "97805533807771634566"
            }
        },
        {
            "totalQuantity": 5,
            "book": {
                "title": "The Theory of Everything",
                "isbn": "97805533871634566"
            }
        }
    ]
}

