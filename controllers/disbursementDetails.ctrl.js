const DisbursementDetails = require("../models/DisbursementDetails");

// Get all disbursement details
exports.getAllDisbursementDetails = async (req, res) => {
  try {
    const details = await DisbursementDetails.find();
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDisbursementDetailsByUidAndLAI=async(req,res)=>{
  const {uid,lai} = req.params
 const details = await DisbursementDetails.findOne({ uid, lai });
 if(!details){
  res.status(200).json({message:"Data not found"})
 }

 res.status(200).json(details)
}
// Get disbursement details by ID
exports.getDisbursementDetailsById = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await DisbursementDetails.findById(id);
    if (!details) {
      return res
        .status(404)
        .json({ message: "Disbursement Details not found" });
    }
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new disbursement details
exports.createDisbursementDetails = async (req, res) => {
  try {
    const details = new DisbursementDetails(req.body);
    await details.save();
    res.status(201).json(details);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update disbursement details by ID
exports.updateDisbursementDetailsById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDetails = await DisbursementDetails.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedDetails) {
      return res
        .status(404)
        .json({ message: "Disbursement Details not found" });
    }
    res.status(200).json(updatedDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
