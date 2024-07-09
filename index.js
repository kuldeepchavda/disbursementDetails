const dotenv = require("dotenv")
dotenv.config({ path: "./.env" });
const express = require("express");
const mongoose = require("mongoose");
const disbursementDetailsRoutes = require("./routes/disbursementDetails.routes");
const loanOfferRoutes  = require("./routes/loanOffer.routes")
const app = express();

app.use(express.json());

mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/disbursementdetails", disbursementDetailsRoutes);
app.use("/loan-offers",loanOfferRoutes);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});