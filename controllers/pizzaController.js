// Base de données simulée en mémoire
let pizzas = [
    {
        id: 1,
        name: "Margherita",
        ingredients: ["Mozzarella"],
        price: 12
    },
    {
        id: 2,
        name: "4 Saisons",
        ingredients: ["Mozzarella", "champignons frais", "poivrons", "artichauts", "jambon"],
        price: 17
    },
    {
        id: 3,
        name: "La DIAVOLA",
        ingredients: ["Merguez", "salami piquant", "poivrons", "oignons rouge", "mozzarella flor di latte."],
        price: 19
    }
];

// GET toutes les pizzas
exports.getPizzas = (req, res) => {
    res.json(pizzas);
};

// GET une pizza par ID
exports.getPizzaById = (req, res) => {
    const pizza = pizzas.find(p => p.id === parseInt(req.params.id));
    if (!pizza) return res.status(404).json({ message: "Pizza non trouvée" });
    res.json(pizza);
};

// POST une nouvelle pizza
exports.createPizza = (req, res) => {
    const newPizza = { id: pizzas.length + 1, ...req.body };
    pizzas.push(newPizza);
    res.status(201).json(newPizza);
};