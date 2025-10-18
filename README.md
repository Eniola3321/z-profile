# 🐱 Express Cat Facts API

A simple Node.js + Express server that returns **user information** and a **random cat fact** fetched from [catfact.ninja](https://catfact.ninja/fact).  
The project includes essential middlewares like **rate limiting**, **CORS**, **request logging**, and **dotenv** for environment variables.

---

## 🚀 Features

- ✅ Simple and lightweight Express server
- 🌐 Public endpoint to return user info and random cat fact
- 🛡 Rate limiting to prevent abuse
- 📝 HTTP request logging using Morgan
- 🌍 CORS enabled
- ⚙️ Environment variables configuration

---


## 🧰 Dependencies

 Package                | Description                                
___________________________________________________
- express             | Web framework for Node.js                  
- express-rate-limit  | Rate limiter middleware for Express        
- morgan              | HTTP request logger                        
- cors                | Enable Cross-Origin Resource Sharing     
- dotenv              | Load environment variables from `.env` 



## 🧑‍💻 Prerequisites

- Node.js 
- pnpm or yarn installed

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Eniola3321/Dynamic-Profile


## Environment Variable(.env)
PORT=3000
MY_EMAIL=youremail@example.com
MY_NAME=your name
MY_STACK=Node.js/Express

## API Endpoint
GET /me

Returns:
Your personal info from .env
A random cat fact
A timestamp
Example Response:

{
  "status": "success",
  "user": {
    "email": "youremail@example.com",
    "name": "Your Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-16T13:45:30.123Z",
  "fact": "Cats sleep 70% of their lives."
}
