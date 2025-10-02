const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const products = require('./data/products.json');
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs")

/* ส่งข้อมูลแบบยาว
productRouter.route("/").get((reg, res) => {
    res.render("products", {
        products: [
            {productTitle: "น้ำยาล้างจาน", productDescription: "น้ำยาสูตร 1", productPrice: 45},
            {productTitle: "น้ำยาล้างจาน 2", productDescription: "น้ำยาสูตร 2", productPrice: 60},
            {productTitle: "น้ำยาล้างจาน 3", productDescription: "น้ำยาสูตร 3", productPrice: 75},
        ],
    })
});
*/

//ส่งข้อมูลแบบสั้น
productRouter.route("/").get((reg, res) => {
    res.render("products",
        products,
    );
});

productRouter.route("/1").get((reg, res) => {
    res.send("Hello World, I'm products 1")
});

app.use("/products", productRouter)

/*app.get("/Hello")*/

/* จัดการ request ที่เข้ามาในหน้า / จะส่งข้อมูลอะไรกลับไป */
app.get("/", (req, res) => {

    /*res.send("Hello My World 555");*/
    res.render("index", { username: "Joeyza55+", customers: ["ABC", "B", "C"] });

})

app.listen(PORT, () => {
    debug("Listening on port", chalk.red(PORT));
})