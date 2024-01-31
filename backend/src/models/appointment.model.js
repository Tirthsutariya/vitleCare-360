import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const appointmentSchema = new Schema(
  {
    patientRef: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: true
    },
    doctorRef: {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    slotRef: {
        type: Schema.Types.ObjectId,
        ref: "Slot",
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    appointmentStatus: {
      type: String,
      enum: ["pending", "confirmed", "canceled"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Appointment = mongoose.model("Appointment", appointmentSchema);
