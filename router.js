const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('./database/db');
const login = require('./controllers/login');



router.get('/ping',(req, res)=>{
    res.send('pong');
  });
router.post('/login',(req, res)=>{
    res.send('Hallo Welt');
  });

router.post('/auth',login.auth);

//middlerware para validar inicio de sesión en todas las páginas
router.get('/',login.validarSesion);

module.exports = router;