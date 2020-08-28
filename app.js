const express = require("express");
const app = express();
const port = 39000;

app.use(express.static('public'));
app.use("/scripts", express.static('node_modules/tinymce'));

app.listen(port, () => {
    console.log(`Listening at http://[::1]:${port}`)
});
