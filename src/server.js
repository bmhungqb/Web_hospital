import express from "express"
import bodyParser from "body-parser"
import configViewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web"

require('dotenv').config()

let app = express()

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 8080

app.listen(port, () => {
    console.log("hi bui manh hung");
})