// a NodeJs code that represents web server that returns list of users

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route that returns a static response
app.get('/api/users', (req, res) => {
  // go to db
  // get list of users
  // return list of users
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' }
  ]);
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Express API. Try /api/hello endpoint.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
