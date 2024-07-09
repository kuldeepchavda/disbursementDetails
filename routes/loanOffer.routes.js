const express = require("express");
const router = express.Router();
const loanOfferController = require("../controllers/loanOffer.ctrl");

// Route to fetch all loan offers 
router.get("/getallloans",loanOfferController.getAllLoans) //checked
 
// Route to fetch loan offers by user id (uid)
router.get("/loan/:uid", loanOfferController.getLoanOffers); // checked

// Route to create a new loan offer
router.post("/create", loanOfferController.createLoanOffer); // checked

// Route to update an existing loan offer by id
router.put("/update/:id", loanOfferController.updateLoanOffer);  // checked

module.exports = router;
