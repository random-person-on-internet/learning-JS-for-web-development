import { mongoose } from "mongoose";

const hoursAtHospitalsSchema = new mongoose.Schema({
  hospitalName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
  },
  hours: {
    type: Number,
    required: true,
  },
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualifications: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    /*worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ],*/
    // what if we need number of hours they spend at each?
    worksInHospital: {
      type: [hoursAtHospitalsSchema],
    },
  },

  {
    timestamps: true,
  }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
