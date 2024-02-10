const express = require('express');
const app = express();

// Middleware to calculate response time
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const end = Date.now();
        const responseTime = end - start;
        console.log(`Response time: ${responseTime}ms`);
    });
    next();
});

// Your routes and other middleware can be defined here

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
