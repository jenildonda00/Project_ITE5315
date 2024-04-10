const express = require('express');
const connectToDB = require('./db');
const apiRouter = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectToDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', apiRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
