const express = require("express");
const cors = require("cors");
const app = express();
const Routes = require("./Routes");

app.use(cors());
app.use(express.json());
app.use(Routes);

app.listen(3000);
