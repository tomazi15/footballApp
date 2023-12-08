import { Router } from "express";

const router: Router = Router();

const clubController = require("../controllers/club.controller");

router.get("/", clubController.getAllClubs);

module.exports = router;
