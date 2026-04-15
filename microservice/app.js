const express = require('express');
const app = express();

const PORT = 3000;

// Simple API
app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: "Ayyu" },
        { id: 2, name: "John" }
    ]);
});

// Start server
app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
