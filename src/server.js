const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors())
app.use(morgan('dev'))


//////////////////////////////////////////////////////////////////////////////
// Routes
//////////////////////////////////////////////////////////////////////////////
const snacks = require('./routes/snacks');
app.use('/api', snacks);

const users = require('./routes/users');
app.use('/api', users);

const authController = require('./controllers/auth')
//
// const reviews = require('./routes/reviews');
// app.use('/api', reviews);

//////////////////////////////////////////////////////////////////////////////
// Authentication
//////////////////////////////////////////////////////////////////////////////

// app.use('/auth', require('./routes/auth'));

// app.get('/protected',
//         authController.isAuthenticated,
//         function(req, res, next){ res.send({ id: req.claim.id, message: "Convict status confirmed" }) })
//
// app.get('/protected/:userId',
//         authController.isAuthenticated,
//         authController.isSelf,
        // function(req, res, next){ res.send({ id: req.claim.id, message: "Convict status unconfirmed. Please see sentencing for authorized access."}) })

app.use((req, res) => {
  const status = 404;
  const message = `Could not ${req.method} ${req.path}`;
  res.status(status).json({ status, message });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  const status = err.status || 500;
  const message = err.message || 'Something went wrong!';
  res.status(status).json({ message, status });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Always watching you on PORT ${port} 👁`);
});
