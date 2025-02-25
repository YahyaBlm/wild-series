// Load environment variables from .env file
import "dotenv/config";

// Import the Express application from ./app
import app from "./app";

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
import "../database/checkConnection";

// Start the server and listen on the specified port

// Get the port from the environment variables
const port = process.env.APP_PORT;

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
