import mongoose, { mongo, Schema } from "mongoose";

const courseSchema = new Schema(
  {
    courseCode: {
      type: String,
    },
    name: {
      type: String,
      department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
        required: true,
      },
      credits: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
      },
      description: String,
      prerequisites: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },
      ],
      faculty: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Faculty",
      },
      semestersOffered: {
        type: String,
        enum: ["Fall"],
      },
    },
  },
  { timestamps: true }
);

export const Course = mongoose.Schema("Course", courseSchema);
