
const express = require('express');
const router = express.Router();

const workingHours = (req, res, next) => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hours = now.getHours();

    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 9 && hours <= 17) {
        next();
    } else {
        res.status(403).send('Sorry, the website is only available during working hours (Mon-Fri, 9 AM to 5 PM).');
    }
};

router.use(workingHours);

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

router.get('/services', (req, res) => {
    res.sendFile(__dirname + '/views/services.html');
});

router.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
});

module.exports = router;
