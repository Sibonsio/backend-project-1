import mongoose from 'mongoose'

const booKeepingSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Firstname is required']
    },
    lastname: {
        type: String,
        required: [true, 'Lastname is required']
    },
    age: {
        type: Number,
        required: [true, 'Age is required']
    },
    employmentStatus: {
        type: String,
        required: [true, 'Employment Status is required'], enum: [employed, unemployed]
    },
}, { timestamps: true, versionKey: false })

const booKeepingModel = mongoose.model('booKeepingModel', booKeepingSchema)
export default booKeepingModel