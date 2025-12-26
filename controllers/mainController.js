
// Main Controller
// Handles logic for Home, About, Contact, Dynamic Data, and JSON Echo

exports.getHome = (req, res) => {
    res.json({ message: 'Welcome to the Backend Server!' });
};

exports.getAbout = (req, res) => {
    res.json({ 
        message: 'This is a simple Express JS server built using MVC pattern.',
        author: 'Antigravity Agent'
    });
};

exports.getContact = (req, res) => {
    res.json({ 
        email: 'contact@example.com',
        support: 'https://support.example.com'
    });
};

exports.getDynamicData = (req, res) => {
    const now = new Date();
    res.json({ 
        message: 'Current server time',
        timestamp: now.toISOString(),
        greeting: now.getHours() < 12 ? 'Good Morning' : 'Good Day'
    });
};

exports.postEcho = (req, res) => {
    const data = req.body;
    res.json({ 
        received: data,
        message: 'You sent this data, and I am echoing it back!'
    });
};
