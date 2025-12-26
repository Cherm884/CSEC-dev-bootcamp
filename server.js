
const express = require('express');
const mainRoutes = require('./routes/mainRoutes');
const errorController = require('./controllers/errorController');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/', mainRoutes);

// 404 Handler - Must be last
app.use(errorController.get404);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
