const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const morgan = require("morgan");
const connectMongo = require("./config/mongoDBConfig.js"); //database connection
const connectCloudinary = require("./config/cloudinaryConfig.js");
//import routers
const routerProduct = require("./routers/router_product.js");
const routerUser = require("./routers/router_auth.js");
const routerSignup = require("./routers/router_signUp.js");
const routerLogin = require("./routers/router_auth.js");
const routerAddIdol = require("./routers/router_addIdol.js");
env.config();
const app = express();
const port = process.env.PORT;

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// connect to Database
connectMongo();
connectCloudinary();
//Routers
app.use("/api", routerProduct);
app.use("/login", routerUser);
app.use("/api/signup",routerSignup);
app.use("/api/login",routerLogin);
app.use("/addproduct",routerAddIdol);
app.use("/uploadproduct",routerProduct);

app.listen(port, () => {
  console.log(`server running port http://localhost:${port}`);
});
