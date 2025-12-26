
// Error Controller
// Handles 404 Unknown Routes

exports.get404 = (req, res) => {
    res.status(404).json({ error: 'Route not found' });
};
