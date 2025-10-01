const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs")

app.get("/products")

/*app.get("/Hello")*/

/* จัดการ request ที่เข้ามาในหน้า / จะส่งข้อมูลอะไรกลับไป */
app.get("/", (req, res) => {

    /*res.send("Hello My World 555");*/
    res.render("index", { username: "Joeyza55+", customers: ["ABC", "B", "C"] });

})

app.listen(PORT, () => {
    debug("Listening on port", chalk.red(PORT));
})