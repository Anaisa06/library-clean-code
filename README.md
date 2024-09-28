Aquí tienes un archivo `README.md` en inglés para tu proyecto:

```markdown
# Library Clean Code

This is a library management system built using NestJS and MongoDB, following clean code principles.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (version 8 or higher)
- [MongoDB](https://www.mongodb.com/) (Ensure MongoDB is running locally or have access to a MongoDB cloud instance)

## Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/Anaisa06/library-clean-code.git>
   ```

2. Navigate into the project directory:

   ```bash
   cd library-clean-code
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Running the Application

### Development Mode

To start the project in development mode with file watching, use:

```bash
npm run start:dev
```

### Production Mode

To build and run the application in production mode, use:

```bash
npm run build
npm run start:prod
```

## Running Tests

This project uses **Jest** for unit testing.

### Run Unit Tests

```bash
npm run test
```

### Run Unit Tests in Watch Mode

```bash
npm run test:watch
```

### Run Test Coverage

```bash
npm run test:cov
```


## Linting

To lint the codebase and automatically fix errors:

```bash
npm run lint
```

## Formatting Code

This project uses **Prettier** for code formatting. To format your code:

```bash
npm run format
```

## API Documentation

The project uses **Swagger** for API documentation. Once the application is running, access the documentation at:

```
http://localhost:3000/api/v1/docs
```
