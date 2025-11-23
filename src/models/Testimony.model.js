import mongoose, { Schema, model, models } from "mongoose";

const TestimonySchema = new mongoose.Schema({
  by:{
    type: String,
    required: true
  },
  message:{
    type: String,
    required: true
  },
  fileLink: {
      type: String,
  },
  filePublicId: {
      type: String,
  },
}, {timestamps: true})

TestimonySchema.pre("save", async function (next) {
  console.log("testing save");
  next();
});

const Testimony =
  models?.Testimony || model("Testimony", TestimonySchema);

export default Testimony;