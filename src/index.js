const express = require("express");
const app = express();

const { ServerConfig, LoggerConfig } = require("./config");
const apiRoutes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Server started successfully at Port : ${ServerConfig.PORT}`);
  LoggerConfig.info("Successfully started server", {});
});
