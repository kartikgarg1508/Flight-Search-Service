const express = require("express");
const router = express.Router();

const { infoController } = require("../../controllers");
const AirplaneRoutes = require("./airplane-routes");
const CityRoutes = require("./city-routes");
const AirportRoutes = require("./airport-routes");
const FlightRoutes = require("./flight-routes");

router.use("/airplanes", AirplaneRoutes);
router.use("/cities", CityRoutes);
router.use("/airports", AirportRoutes);
router.use("/flights", FlightRoutes);

router.get("/info", infoController.info);

module.exports = router;
