# School Management API

## Description
This is a REST API built using Node.js, Express.js, and MySQL.
It allows users to add schools and list schools sorted by distance.

---

## API Endpoints

### Add School
POST /addSchool

Body:
{
  "name": "ABC School",
  "address": "Chennai",
  "latitude": 20.00,
  "longitude": 20.00
}

---

### List Schools
GET /listSchools?latitude=13.00&longitude=13.00

---

## Tech Stack
- Node.js
- Express.js
- MySQL

---

## Testing
Use Postman collection provided in the repository.

---

## Deployement 
I have deployed the backend and MySQl with the help of render and aiven

## 🚀 Setup Instructions

1. Clone the repository
2. Install dependencies:
   npm install

3. Create a `.env` file using `.env.example`

4. Run MySQL and execute:
   SOURCE schema.sql;

5. Start server:
   npm run dev

---
