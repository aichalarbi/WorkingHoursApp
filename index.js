const express = require('express');
const app = express();
const router = require('./middleware/hours');

app.use(express.static('public'));
app.use('/', router);
app.listen(5000, () => {
    console.log('Server is running on 5000');
});
