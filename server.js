const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./gadget-vault-backend/authRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

// ...existing code...

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
