import express from "express";
import routerApi from "./routers/testimonioRouterApi.js";
import routerWebPage from "./routers/testimoniosRouterWebPage.js";
import path from "path";
import ejs from "ejs";

const app = express();

app.set("views", path.join(path.resolve(), "./src/views"));
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("src/public"));

app.use("/", routerWebPage);
app.use("/Api", routerApi)

app.listen(80, function() {
    console.log("Server Online");
})