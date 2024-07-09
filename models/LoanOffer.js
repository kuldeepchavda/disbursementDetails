const mongoose = require("mongoose");

const loanOfferSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  lai: {
    type: String,
    required: true,
  },
  tenure: {
    type: String,
  },
  loanType: {
    type: String,
  },
  productCode: {
    type: String,
  },
  repaymentFrequency: {
    type: Number,
  },
  annualInterestPercentage: {
    type: Number,
  },
  annualInterestAmount: {
    type: Number,
  },
  processingFeePercentage: {
    type: Number,
  },
  processingFeeAmount: {
    type: Number,
  },
  gstPercentage: {
    type: Number,
  },
  gstAmount: {
    type: Number,
  },
  totalDeduction: {
    type: Number,
  },
  disbursedAmount: {
    type: Number,
  },
  sanctionAmount: {
    type: Number,
  },
  repaymentAmount: {
    type: Number,
  },
  weeklyRepaymentAmount: {
    type: Number,
  },
  lateRepaymentFee: {
    type: Number,
  },
});

module.exports = mongoose.model("LoanOffer", loanOfferSchema);
