# Text Analyzer Project (Frontend)

Text Analyzer Tool is a simple application built with React, Keycloak, TypeScript to analyze texts. The API provides endpoints to add texts, analyze them for the number of words, characters, sentences, paragraphs, and to find the longest words in the text.

## Backend :
Follow this url: https://github.com/Mueem-Nahid/text-analyzer-tool-backend

## Demo project video:
Video: https://drive.google.com/file/d/1YJt3VIW15heCDZsEfPwzpGfllm__KnUc/view?usp=sharing

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Technology](#technology)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Author](#author)

## Requirements

- nodejs
- mongodb
- keycloak. Install and configure keycloak: https://www.keycloak.org/getting-started/getting-started-zip

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Mueem-Nahid/text-analyzer-frontend.git

2. Navigate into the project directory
3. Install dependencies: npm install

## Usage
Add `.env` file, add required config according to the .env.sample.

To run the server locally, execute:

`npm run dev`

The server will start listening on port 3000 by default. You can then access the API endpoints using tools like Postman or curl.

## Technology

- React
- Tailwind css
- TS
- Redux toolkit, react query
- SSO (Oauth2.0, keycloak)

## API Documentation

### Sign up user

- Keycloak for SSO.

### Create a new text

-   **URL:** `http://localhost:5000/api/v1/analyzer/`
-   **Method:** `POST`
-   **Headers:** `email: user@example.com Authorization: token`
-   **Request Body:**
    `{
    "text": "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun."
    }`

-   **Success Response:**
-   **Code:** `201 Created`
-   **Content:**

    `{
    "success": true,
    "message": "Text inserted successfully !",
    "data": {
    "_id": "609f848e6aafb3d40a3f0db1",
    "text": "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.",
    "email": "user@example.com",
    "createdAt": "2024-04-20T00:00:00.000Z",
    "updatedAt": "2024-04-20T00:00:00.000Z"
    }
    }`


### Get all text

-   **URL:** `http://localhost:5000/api/v1/analyzer/`
-   **Method:** `GET`
-   **Headers:** `email: user@example.com Authorization: token`
-   **Success Response:**
-   **Code:** `200 OK`
-   **Content:**

    `[
    {
    "success": true,
    "message": "Text inserted successfully !",
    "data": {
    "_id": "609f848e6aafb3d40a3f0db1",
    "text": "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.",
    "email": "user@example.com",
    "createdAt": "2024-04-20T00:00:00.000Z",
    "updatedAt": "2024-04-20T00:00:00.000Z"
    }
    }
    ]`


### Get user by ID

-   **URL:** `http://localhost:5000/api/v1/analyzer/:id`
-   **Method:** `GET`
-   **Headers:** `email: user@example.com Authorization: token`
-   **URL Params:** `id=[integer]`
-   **Success Response:**
-   **Code:** `200 OK`
-   **Content:**

    `{
    "success": true,
    "message": "Text inserted successfully !",
    "data": {
    "_id": "609f848e6aafb3d40a3f0db1",
    "text": "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.",
    "email": "user@example.com",
    "createdAt": "2024-04-20T00:00:00.000Z",
    "updatedAt": "2024-04-20T00:00:00.000Z"
    }
    }`


### Delete user by ID

-   **URL:** `http://localhost:5000/api/v1/analyzer/:id`
-   **Method:** `DELETE`
-   **Headers:** `email: user@example.com Authorization: token`
-   **URL Params:** `id=[integer]`
-   **Success Response:**
-   **Code:** `204 No Content`

### Get Number of Words
-   **URL:** `http://localhost:5000/api/v1/analyzer/:id/words`
-   **Method:** `GET`
-   **Headers:** `email: user@example.com Authorization: token`
-   **Success Response:**
-   **Code:** `200 OK`
-   **Content:**

    `{
    "success": true,
    "message": "Number of words fetched successfully !",
    "data": {
    "count": 9
    }
    }`

### Get Number of Characters
-   **URL:** `http://localhost:5000/api/v1/analyzer/:id/characters`
-   **Method:** `GET`
-   **Headers:** `email: user@example.com Authorization: token`
-   **Success Response:**
-   **Code:** `200 OK`
-   **Content:**

    `{
    "success": true,
    "message": "Number of words fetched successfully !",
    "data": {
    "count": 9
    }
    }`

### Get Number of Paragraphs
-   **URL:** `http://localhost:5000/api/v1/analyzer/:id/paragraphs`
-   **Method:** `GET`
-   **Headers:** `email: user@example.com Authorization: token`
-   **Success Response:**
-   **Code:** `200 OK`
-   **Content:**

    `{
    "success": true,
    "message": "Number of words fetched successfully !",
    "data": {
    "count": 9
    }
    }`

### Get Number of Sentences
-   **URL:** `http://localhost:5000/api/v1/analyzer/:id/sentences`
-   **Method:** `GET`
-   **Headers:** `email: user@example.com Authorization: token`
-   **Success Response:**
-   **Code:** `200 OK`
-   **Content:**

    `{
    "success": true,
    "message": "Number of words fetched successfully !",
    "data": {
    "count": 9
    }
    }`

### Get Longest Words
-   **URL:** `http://localhost:5000/api/v1/analyzer/:id/longest-words`
-   **Method:** `GET`
-   **Headers:** `email: user@example.com Authorization: token`
-   **Success Response:**
-   **Code:** `200 OK`
-   **Content:**

    `{
    "success": true,
    "message": "Number of words fetched successfully !",
    "data": {
    "longestWords": ["aaabcd"]
    }
    }`

### Get Longest Words
-   **URL:** `http://localhost:5000/api/v1/analyzer/report/:id`
-   **Method:** `GET`
-   **Headers:** `email: user@example.com Authorization: token`
-   **Success Response:**
-   **Code:** `200 OK`

## Author

This project is authored by Mueem Nahid.