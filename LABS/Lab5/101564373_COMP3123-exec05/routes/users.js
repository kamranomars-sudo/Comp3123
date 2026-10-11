
const express = require('express');
const routerUser = express.Router();
const users = require('../user.json');

/*
- Return all details from user.json file to client as JSON format
*/
routerUser.get('/profile', (req, res) => {
    res.json(users);
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- Validate username and password
*/
routerUser.post('/login', (req, res) => {
    const { username, password } = req.body || {};

    const userList = Array.isArray(users) ? users : [users];

    const user = userList.find(
        (u) => u.username === username
    );

    if (!user) {
        return res.json({
            status: false,
            message: "User Name is invalid"
        });
    }

    if (user.password !== password) {
        return res.json({
            status: false,
            message: "Password is invalid"
        });
    }

    res.json({
        status: true,
        message: "User Is valid"
    });
});

/*
- Modify /logout route to accept username as parameter
- Display message in HTML format
*/
routerUser.get('/logout', (req, res) => {
    const username = req.query.username || req.params.username;

    if (!username) {
        return res.status(400).send('Username is required');
    }

    res.send(`<b>${username.replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;',
        '"': '&quot;', "'": '&#39;'
    }[c]))} successfully logout.</b>`);
});

module.exports = routerUser;
