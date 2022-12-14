import mongoose from "mongoose";

const lecturers = new mongoose.Schema({
    lecturer_name: {
        type: String,
        required: true
    },
    qualification: {
        type: String
    },
    specialization: {
        type: String
    },
    picExt: {
        type: String
    },
    fileExt: {
        type: String
    }
})

export default mongoose.model("lecturers", lecturers);