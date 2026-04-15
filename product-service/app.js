const express = require('express');
const app = express();

const PORT = 3001;

// Product API
app.get('/products', (req, res) => {
    res.json([
        { id: 1, name: "Laptop" },
        { id: 2, name: "Phone" }
    ]);
});

// Start server
app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
});
