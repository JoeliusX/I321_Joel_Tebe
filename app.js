const express = require("express");
const morgan = require("morgan");
const pizzaRoutes = require("./routes/pizzaRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan("dev"));

// Routes pizzas
app.use("/api/pizzas", pizzaRoutes);

app.get("/", (req, res) => {
    res.send("🍕 API Pizzas prête 🚀");
});

app.listen(PORT, () => {
    console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});