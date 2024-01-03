const app = require('./app')
require('dotenv').config()

const port = process.env.PORT || 3000 // De esta forma si no toma el puerto de .env, tiene el alternativo 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })