const express = require("express");

const app = express();

// Middleware to read JSON request bodies
app.use(express.json());

// Serve static files from the public folder
app.use(express.static("public"));

// GET /hello
app.get("/hello", (req, res) => {
    res.type("text/plain").send("Hello Express JS");
});

// GET /user?firstname=John&lastname=Doe
app.get("/user", (req, res) => {
    const firstname = req.query.firstname || "Pritesh";
    const lastname = req.query.lastname || "Patel";

    res.json({
        firstname: firstname,
        lastname: lastname
    });
});

// POST /user/:firstname/:lastname
app.post("/user/:firstname/:lastname", (req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;

    res.json({
        firstname: firstname,
        lastname: lastname
    });
});

// POST /users
app.post("/users", (req, res) => {
    const users = Array.isArray(req.body) ? req.body : [];

    res.json(users);
});

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});