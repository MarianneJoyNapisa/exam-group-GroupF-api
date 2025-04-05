const express = require('express');
const app = express();
const examRoutes = require('./routes/examRoutes');

app.use(express.json());
app.use('/api', examRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});