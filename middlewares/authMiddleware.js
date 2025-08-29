const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"];

    // Exemple de token attendu : "Bearer SECRET_PIZZA_TOKEN"
    if (!token || token !== "Bearer SECRET_PIZZA_TOKEN") {
        return res.status(401).json({ message: "Accès interdit à la pizzeria 🚫🍕" });
    }

    // Si le token est valide, on passe à la route suivante
    next();
};

module.exports = authMiddleware;