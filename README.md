# React-Express Demo

This is a full-stack demo application built with React for the frontend and Express for the backend. It includes a credit card validation feature using the Luhn algorithm.

## Features

- **Frontend**: React with Typescript and Material-UI for styling.
- **Backend**: Express with TypeScript.
- **Validation**: Credit card validation using the Luhn algorithm.
- **Dockerized**: Docker and Docker Compose for containerized deployment (optional).

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)

## Optional if using docker
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/react-express-demo.git
cd react-express-demo
```

### 2. Install Dependencies

#### Client
```bash
cd client
npm install
```

#### Server
```bash
cd ../server
npm install
```

### 3. Run Locally

#### Without Docker
Run the server:
```bash
cd server
npm start
```

Run the client:
```bash
cd ../client
npm start
```

#### Using Docker Compose
```bash
docker-compose up
```

The client will be available at `http://localhost:3000` and the server at `http://localhost:8080`.

## API Endpoints

### `POST /card/validate`

Validates a credit card number.

- **Request Body**:
  ```json
  {
    "cardNumber": "string"
  }
  ```

- **Response**:
  ```json
  {
    "valid": true,
    "error": "string"
  }
  ```

## Scripts

### Client
- `npm start`: Start the React development server.
- `npm run build`: Build the React app for production.

### Server
- `npm start`: Start the Express server.
- `npm run build`: Compile TypeScript to JavaScript.
- `npm test`: Run tests using Jest.

## Docker

### Build and Run
```bash
docker build -t react-express-demo .
docker run -p 8080:8080 -p 3000:3000 react-express-demo
```

### Docker Compose
```bash
docker-compose up
```

## Folder Structure

```
react-express-demo/
├── client/          # React frontend
├── server/          # Express backend
├── Dockerfile       # Docker configuration
├── docker-compose.yml
├── .gitignore
├── .dockerignore
└── README.md
```
