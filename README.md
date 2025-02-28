# MERN Social Network API 🚀

## Description
This project is a **backend API** for a social network application. It uses:
- **MongoDB** as the database (NoSQL)
- **Mongoose** as the ODM (Object Data Modeling)
- **Express.js** for handling routes
- **TypeScript** for type safety and improved development experience

This API allows users to:
- Create a user
- Update user information
- Delete a user (and their associated thoughts)
- Add and remove friends from their friend list
- Create thoughts (like posts)
- Update and delete thoughts
- Add and remove reactions to thoughts (like comments)

---

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Technologies Used](#technologies-used)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)
- [Author](#author)

---

## Installation
1. Clone the repository to your machine:
    ```bash
    git clone git@github.com:JT-code-dev/mern-social-network-api.git
    ```
2. Navigate into the project directory:
    ```bash
    cd mern-social-network-api
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up your `.env` file in the root directory:
    ```
    MONGODB_URI=mongodb://127.0.0.1:27017/socialNetworkDB
    PORT=3001
    ```
5. Build the project:
    ```bash
    npm run build
    ```
6. Start the server:
    ```bash
    npm start
    ```
---

## Usage
This is a **backend-only** project. You will test all routes using **Insomnia** (or Postman). The server should be running at:
http://localhost:3001

---

## Routes
Here’s a complete list of the working routes:

### Users 👥
| Method | Endpoint                         | Description                        |
|-------|----------------|----------------------------------|
| GET      | /api/users                     | Get all users |
| GET      | /api/users/:userId     | Get one user (by ID) |
| POST    | /api/users                     | Create new user |
| PUT       | /api/users/:userId     | Update a user (by ID) |
| DELETE | /api/users/:userId     | Delete user (and thoughts) |
| POST    | /api/users/:userId/friends/:friendId | Add a friend |
| DELETE | /api/users/:userId/friends/:friendId | Remove a friend |

---

### Thoughts 💭
| Method | Endpoint                         | Description                        |
|-------|----------------|----------------------------------|
| GET      | /api/thoughts                 | Get all thoughts |
| GET      | /api/thoughts/:thoughtId | Get one thought (by ID) |
| POST    | /api/thoughts                 | Create a new thought |
| PUT       | /api/thoughts/:thoughtId | Update a thought |
| DELETE | /api/thoughts/:thoughtId | Delete a thought |

---

### Reactions 🎉
| Method | Endpoint                                             | Description                        |
|-------|--------------------------|----------------------------------|
| POST    | /api/thoughts/:thoughtId/reactions    | Add a reaction to a thought |
| DELETE | /api/thoughts/:thoughtId/reactions/:reactionId | Remove a reaction from a thought |

---

## Technologies Used 🛠️
- Node.js
- Express.js
- MongoDB
- Mongoose
- TypeScript
- Nodemon (for dev)
- dotenv (for environment variables)
- Insomnia (for testing)

---

## Walkthrough Video 📽️
Click below to watch a demo walkthrough showing how to use the API in Insomnia:



---

## License
This project is licensed under the [MIT](./LICENSE).

---

## Author 👩‍💻
**Jennifer H. Thompson**  
💌 Email: [writejthompson@gmail.com](mailto:writejthompson@gmail.com)  
📖 GitHub: [JT-code-dev](https://github.com/JT-code-dev)

---

## Notes
✅ This project was built for the Full-Stack Coding Bootcamp and fulfills all project requirements for the **Social Network API** assignment.  
✅ Future plans: Add a frontend to turn this into a full MERN app.

---

### 💚 Thank you for checking out my project!
