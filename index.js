const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const UPLOAD_PATH = 'uploads/';
const upload = multer({ dest: UPLOAD_PATH })

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/photos/upload', upload.array('photos'), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})

app.post(`/${UPLOAD_PATH.replace('/','')}`, upload.array('files'), (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});

app.listen(port, () => {
    if(!fs.existsSync(UPLOAD_PATH)){
      fs.mkdirSync(UPLOAD_PATH)  
    }
  console.log(`Printer API listening on port ${port}\nUPLOAD_PATH: ${UPLOAD_PATH}`)
})