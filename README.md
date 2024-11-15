# TypeScript CRUD Hackathon Project

## Overview
This project is designed for learners to build a frontend CRUD application using TypeScript that interacts with a provided backend API. The project utilizes TypeScript concepts such as types, interfaces, classes, generics, and decorators to ensure strong typing and maintainable code.

## Prerequisites

- Node.js and npm installed
- Basic understanding of TypeScript, HTML, and CSS
- Git installed for cloning the repository

## Download and Installation

1. **Clone the Repository**

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/your-repo/typescript-crud-hackathon.git
   cd typescript-crud-hackathon
   ```

2. **Install Dependencies**

   To install all the required dependencies for the backend, json-server, and frontend, run the following command in the root directory:

   ```bash
   npm run install-all
   ```

## Running the Project

To run the entire project (backend server, json-server, and frontend) with one command, use:

```bash
npm run start-all
```

This command will:
- Start the backend server (running on `http://localhost:5000`)
- Start the json-server (running on `http://localhost:3000`)
- Serve the frontend using live-server (available at `http://127.0.0.1:8080`)

## Project Structure

```plaintext
typescript-crud-hackathon/
├── backend/             # Backend Express server
│   ├── server.ts
│   ├── package.json
│   └── tsconfig.json
├── json-server/         # Mock API server
│   ├── db.json
│   ├── package.json
│   └── tsconfig.json
├── frontend/            # Frontend TypeScript application
│   ├── index.html
│   ├── styles.css
│   ├── app.ts
│   ├── models/
│   ├── services/
│   └── decorators/
├── completed/           # Completed project files
└── README.md            # Project documentation
```

## Troubleshooting

- **Backend Server Issues**: If the backend server fails to start, ensure that all TypeScript dependencies are installed by running:

  ```bash
  npm install --prefix backend
  ```

- **json-server Issues**: If there are issues with json-server, ensure that the `@types/json-server` dependency is removed or correctly updated in `json-server/package.json`.

- **Port Conflicts**: Make sure the ports `3000`, `5000`, and `8080` are not in use by other applications.

## Additional Commands

- **Install Dependencies for a Specific Folder**:
  - Backend: `npm install --prefix backend`
  - json-server: `npm install --prefix json-server`
  - Frontend: `npm install --prefix frontend`

- **Compile TypeScript in the Frontend**:
  ```bash
  npx tsc --project frontend/tsconfig.json
  ```
