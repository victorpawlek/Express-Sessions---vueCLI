const express = require('express');
const router = express.Router();
const users = require('../model/users');
// enter your code here

router.post('/login', (req, res) => {
  // enter your code here
  const email = req.body.email;
  const password = req.body.password;

  if (email && password) {
    const user = users.find(
      (el) => el.email === email && el.password === password
    );
    if (user) {
      req.session.userId = user.id;
      res.status(200).json({ id: user.id, name: user.name });
    } else res.status(401).send('Wrong email or password');
  } else res.status(400).send('Login failed');
});

// router.get('/logout', redirectLogin, (req, res) => {
//   // enter your code here
// });

// router.post('/register', (req, res) => {
//   // enter your code here
// });

router.get('/secretdata', (req, res) => {
  // enter your code here
});

module.exports = router;
