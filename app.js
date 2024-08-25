const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// POST method route
app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  // Separate numbers and alphabets
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const lowerAlphabets = alphabets.filter(item => item === item.toLowerCase());

  // Find the highest lowercase alphabet
  const highestLowercase = lowerAlphabets.length > 0 ? [lowerAlphabets.sort().reverse()[0]] : [];

  // Prepare the response
  const response = {
    is_success: true,
    user_id: "anish_kumar_sinha_01092002",
    email: "anishkumar.sinha2021@vitstudent.ac.in",
    roll_number: "21bce0671",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercase,
  };

  // Send the response
  res.json(response);
});

// GET method route
app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
