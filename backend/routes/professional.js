const express = require("express");

const proController = require("../controllers/professional");

const router = express.Router();

// GET /professional
router.get("/professional", proController.getData);

module.exports = router;
