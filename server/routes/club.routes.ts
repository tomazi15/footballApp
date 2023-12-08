import { Router } from "express";

const router: Router = Router();

const clubController = require("../controllers/club.controller");

router.get("/", clubController.getAllClubs);
router.get("/:id", clubController.getClub);

module.exports = router;
