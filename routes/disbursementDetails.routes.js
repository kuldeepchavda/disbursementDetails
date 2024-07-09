const express = require("express");
const router = express.Router();
const disbursementDetailsController = require("../controllers/disbursementDetails.ctrl");

router.get("/getalldata", disbursementDetailsController.getAllDisbursementDetails); // checked
router.get("/data/:id", disbursementDetailsController.getDisbursementDetailsById);  //checked
router.get("/data/:uid/:lai", disbursementDetailsController.getDisbursementDetailsByUidAndLAI);  // checked 
router.post("/create", disbursementDetailsController.createDisbursementDetails);  // checked
router.put("/update/:id", disbursementDetailsController.updateDisbursementDetailsById);   //checked
module.exports = router;
