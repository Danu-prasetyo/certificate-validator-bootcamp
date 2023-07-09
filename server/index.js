const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.set("port", port);

const routesCertificate = require("./src/routes/certificate");

app.use("/verify", routesCertificate);

app.listen(port, () => {
  console.log(`Examle app in port ${port}`);
});
