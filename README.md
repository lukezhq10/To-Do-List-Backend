# MERN To-Do List App - Backend

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Features](#features)

## Overview

The backend of the To-Do List app provides API endpoints to handle CRUD operations on tasks. It communicates with the MongoDB database to store and retrieve task data.

## Prerequisites

Before running the backend, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mern-todo-list-backend.git
2. Navigate to the project directory:
   ```bash
   cd to-do-list-backend
3. Install dependencies:
   ```bash
   npm install
4. Create a `.env` file in the root directory and set the MongoDB connection string:
   MONGODB_URI=(your_mongodb_connection_string)

## Features

- **RESTful API Endpoints:**
  The backend provides a set of RESTful API endpoints to handle CRUD operations on tasks, ensuring a standardized and scalable interface for communication with the frontend.

- **MongoDB Database:**
  Task data is stored in a MongoDB database, offering a reliable and scalable solution for data persistence.

- **API Endpoints for Task Management:**
  - `GET /get-tasks`: Retrieve all tasks.
  - `POST /add-task`: Create a new task.
  - `PUT /:id`: Update a task by ID.
  - `DELETE /delete-tasks`: Delete all tasks.
  - `DELETE /:id`: Delete a task by ID.

- **Flexible Task Management:**
  The API allows for flexible task management, supporting the creation, retrieval, updating, and deletion of tasks.

- **Backend Filtering and Sorting:**
  The backend supports filtering and sorting of tasks, ensuring that the frontend receives organized and relevant data.

- **Pagination for "Done" List:**
  The "Done" list supports pagination, displaying a limited number (ten) of the most recent entries for a more concise and manageable view.

- **Secure Communication:**
  The backend ensures secure communication with the frontend, protecting data integrity and user privacy.
