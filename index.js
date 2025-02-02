// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
// const adminRouter = require("./routes/admin");
// IMPORTS FROM OTHER FILES
// const authRouter = require("./routes/auth");
// const productRouter = require("./routes/product");
// const userRouter = require("./routes/user");

// INIT
const PORT = 3000;
const app = express();
const DB =
  "mongodb+srv://campuslinknode:26CNoZkvgBq9HrT3@campuslink.wbtod.mongodb.net/?retryWrites=true&w=majority&appName=campuslink";

// middleware
app.use(express.json());
// app.use(authRouter);
// app.use(adminRouter);
// app.use(productRouter);
// app.use(userRouter);

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});