# Dynamic Profile API

A simple Node.js Express API that serves dynamic user profile information along with a random cat fact. This project demonstrates basic API development with rate limiting, CORS, and environment variable management.

## Features

- **Dynamic Profile Endpoint**: Returns user information (email, name, stack) from environment variables.
- **Cat Fact Integration**: Fetches a random cat fact from an external API.
- **Rate Limiting**: Limits requests to prevent abuse (100 requests per 15 minutes per IP).
- **CORS Support**: Allows cross-origin requests.
- **Logging**: Uses Morgan for request logging in development.
- **Docker Support**: Easily containerized and deployable.

## Prerequisites

- Node.js (version 18 or higher)
- npm or pnpm
- Docker (optional, for containerized deployment)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd dynamic-profile
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or if using pnpm:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```
   MY_EMAIL=your-email@example.com
   MY_NAME=Your Name
   MY_STACK=Node.js
   PORT=3000
   ```

## Usage

### Running Locally

Start the development server:

```bash
npm run dev
```

Start the production server:

```bash
npm start
```

The server will run on `http://localhost:3000` (or the port specified in `PORT`).

### API Endpoints

#### GET /me

Returns the user's profile information along with a random cat fact.

**Response:**

```json
{
  "status": "success",
  "user": {
    "email": "your-email@example.com",
    "name": "Your Name",
    "stack": "Node.js"
  },
  "timestamp": "2023-10-01T12:00:00.000Z",
  "fact": "Cats have over 20 muscles that control their ears."
}
```

**Error Handling:**
If the cat fact API is unavailable, it returns a fallback message.

## Environment Variables

- `MY_EMAIL`: Your email address
- `MY_NAME`: Your name
- `MY_STACK`: Your tech stack
- `PORT`: Server port (default: 3000)

## Docker Deployment

### Using Docker Compose

1. Ensure Docker and Docker Compose are installed.

2. Run the application:

   ```bash
   docker-compose up
   ```

   This will build the image, install dependencies, and start the server on port 3000.

### Using Dockerfile

1. Build the Docker image:

   ```bash
   docker build -t dynamic-profile .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 --env-file .env dynamic-profile
   ```

## Project Structure

- `app.js`: Main application file with Express server setup and routes.
- `package.json`: Project dependencies and scripts.
- `Dockerfile`: Instructions for building the Docker image.
- `docker-compose.yml`: Configuration for running with Docker Compose.
- `.gitignore`: Files to ignore in Git.
- `.dockerignore`: Files to ignore in Docker builds.

## Dependencies

- **express**: Web framework for Node.js
- **cors**: Enables CORS
- **dotenv**: Loads environment variables
- **express-rate-limit**: Rate limiting middleware
- **morgan** (dev): HTTP request logger

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the ISC License.
