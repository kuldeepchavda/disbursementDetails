const dotenv = require("dotenv")
dotenv.config({ path: "./.env" });
const express = require("express");
const mongoose = require("mongoose");
const disbursementDetailsRoutes = require("./routes/disbursementDetails.routes");

const app = express();

app.use(express.json());

mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/disbursementdetails", disbursementDetailsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
