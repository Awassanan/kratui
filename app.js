import express from 'express'
import chalk from 'chalk'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url';
import bunniesRouter from './src/router/bunniesRouter.js';
import bunnies from './src/data/bunnies.json' with { type: 'json' };
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import createDebug from 'debug'
const debug = createDebug('app')
const app = express()
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, "/public/")))

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/bunnies", bunniesRouter)

app.get("/", (req, res) => {
    res.render("index", { bunnies });
})

app.listen(PORT, () => {
    debug("Listening on port" + chalk.green(" :", PORT))
})