const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const db = require('./config/db')
const passport = require('passport');
const session = require('express-session');
const { urlencoded } = require('express');
const MongoStore = require('connect-mongo')(session);

dotenv.config({ path: './config/.env' });

require('./config/passport')(passport);

db();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes/home'));
app.use('/', require('./routes/auth'));
app.use('/dashboard', require('./routes/dashboard'));

app.listen(process.env.PORT, (err) => {
    if (err) console.error;
    else console.log('Server running on port ' + process.env.PORT);
});
