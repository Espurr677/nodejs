const express = require('express');
const bodyParser = require('body-parser');
const DB = require('./app/models');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

DB.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and resync db');
});

require('./app/routes/posts.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log(`Server is running on port ${PORT}.`);
});
