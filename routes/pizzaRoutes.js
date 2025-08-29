const express = require("express");
const { getPizzas, getPizzaById, createPizza } = require("../controllers/pizzaController");

const router = express.Router();

// GET /api/pizzas
router.get("/", getPizzas);

// GET /api/pizzas/:id
router.get("/:id", getPizzaById);

// POST /api/pizzas
router.post("/", createPizza);

module.exports = router;