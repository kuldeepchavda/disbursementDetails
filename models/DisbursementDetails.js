const mongoose = require("mongoose");

const disbursementDetailsSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  lai: {
    type: String,
    required: true,
  },
  borrowerName: {
    type: String,
  },
  borrowerAccountNo: {
    type: String,
  },
  sanctionNo: {
    type: String,
  },
  loanAgreementNo: {
    type: String,
  },
  loanAccountNo: {
    type: String,
  },
  loanType: {
    type: String,
  },
  repaymentTenure: {
    type: String,
  },
  repaymentFrequency: {
    type: Number,
  },
  annualInterestPercentage: {
    type: String,
  },
  annualInterest: {
    type: String,
  },
  processingFeePercentage: {
    type: String,
  },
  processingFee: {
    type: String,
  },
  disbursedAmount: {
    type: String,
  },
  sanctionAmount: {
    type: String,
  },
  repaymentAmount: {
    type: String,
  },
  lateRepaymentFee: {
    type: String,
  },
  disbursedOn: {
    type: Date,
  },
});

module.exports = mongoose.model(
  "third-DisbursementDetails",
  disbursementDetailsSchema
);
