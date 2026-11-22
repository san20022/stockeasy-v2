
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Swagger API Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
    res.send("Welcome to StockEasy Inventory API");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
