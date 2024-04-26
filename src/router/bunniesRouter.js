import express from 'express';
const bunniesRoute = express.Router();
import bunnies from '../data/bunnies.json' with { type: 'json' };

bunniesRoute.route("/").get((req, res) => {
    res.render("bunnies", {
        bunnies
    },
    );
});

bunniesRoute.route("/:id").get((req, res) => {
    const id = req.params.id
    res.render("bunny", {
        bunny: bunnies[id],
    })
})

export default bunniesRoute ;