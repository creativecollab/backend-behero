const express = require("express");
const OngController = require("./App/Controller/OngController");
const IncidentController = require("./App/Controller/IncidentController");
const ProfileController = require("./App/Controller/ProfileController");
const SessionController = require("./App/Controller/SessionController");

const route = express.Router();

route.post("/login", SessionController.store);

route.post("/ongs", OngController.store);
route.get("/ongs", OngController.index);

route.get("/profile", ProfileController.index);

route.post("/incidents", IncidentController.store);
route.get("/incidents", IncidentController.index);
route.delete("/incidents/:id", IncidentController.delete);

module.exports = route;
