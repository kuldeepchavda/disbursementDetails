const LoanOffer = require("../models/LoanOffer");

// Fetch all loan offers by user id (uid)
exports.getLoanOffers = async (req, res) => {
  try {
    const { uid } = req.params;
    const loanOffers = await LoanOffer.find({ uid });

    if (!loanOffers.length) {
      return res
        .status(404)
        .json({ message: "No loan offers found for this user." });
    }

    res.status(200).json(loanOffers);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Create a new loan offer
exports.createLoanOffer = async (req, res) => {
  try {
    const loanOffer = new LoanOffer(req.body);
    await loanOffer.save();
    res.status(201).json(loanOffer);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update an existing loan offer by id
exports.updateLoanOffer = async (req, res) => {
  try {
    const { id } = req.params;
    const loanOffer = await LoanOffer.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!loanOffer) {
      return res.status(404).json({ message: "Loan offer not found." });
    }

    res.status(200).json(loanOffer);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


// get all  loans
exports.getAllLoans=async(req,res)=>{
 try{
   const details = await LoanOffer.find()
  if(!details){
    res.status(200).json({message:"No Loan found"})
  }
  res.status(200).json(details)
 }catch(error){
res.status(500).json({error:error.message})
 }

}