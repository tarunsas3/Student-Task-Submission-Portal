const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    sourceUrl: { type: String, required: true },
    deploymentUrl: { type: String, required: true },
    description: { type: String, required: true },
    stack: { type: String, required: false, default: "M E R N" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
