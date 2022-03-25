const express = require('express');
const app = express();
const sheltersRoutes = require('./routes/shelters');
const dogsRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');

app.use('/shelters', sheltersRoutes);
app.use('/dogs', dogsRoutes);
app.use('/admin', adminRoutes);

app.listen(3000, () => {
    console.log('Serving app on localhost:3000');
})