import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://leticiaae:F9HST4ccmRLBHab2@cluster0.lwvrcvu.mongodb.net/node-alura"
);

let db = mongoose.connection;

export default db;