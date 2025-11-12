import booKeepingModel from "../models/booKeepingModel.js"
import mongoose from "mongoose"
export const getAllPeople = async (req, res) => {
    try {
        const getData = await booKeepingModel.find()
        res.status(200).json({ success: true, data: { getData }, message: 'Data successfully retrieved' })
    } catch (error) {
        res.status(404).json({ success: false, message: error.message })
    }
}
export const getPerson = async (req, res) => {
    try {
        const { id } = req.params
        const getData = await booKeepingModel.findById(id)
        res.status(200).json({ success: true, data: { getData }, message: 'Data successfully retrieved' })
    } catch (error) {
        res.status(404).json({ success: false, message: error.message })
    }
}

export const getEmployedPeople = async (req, res) => {
    try {
        const getData = await booKeepingModel.find()
        const employedData = getData.filter((person) => {
            return person.employmentStatus === 'employed'
        })
        res.status(200).json({ success: true, data: { employedData }, message: 'Data successfully retrieved' })
    } catch (error) {
        res.status(404).json({ success: false, message: error.message })
    }
}

export const getUnemployedPeople = async (req, res) => {
    try {
        const getData = await booKeepingModel.find()
        const unemployedData = getData.filter((person) => {
            return person.employmentStatus === 'unemployed'
        })
        res.status(200).json({ success: true, data: { unemployedData }, message: 'Data successfully retrieved' })
    } catch (error) {
        res.status(404).json({ success: false, message: error.message })
    }
}
export const signUp = async (req, res) => {
    const session = await mongoose.startSession()
    session.startTransaction()
    try {
        const { firstname, lastname, age, employmentStatus } = req.body
        const newPerson = new booKeepingModel({ firstname, lastname, age, employmentStatus: employmentStatus.toLowerCase() })
        await newPerson.save({ session })
        await session.commitTransaction()
        res.status(200).json({ success: true, data: { newPerson }, message: 'Signed up successfully' })
    } catch (error) {
        await session.abortTransaction()
        res.status(404).json({ success: false, message: 'Submission Error' })

    } finally {
        session.endSession()
    }
}

export const updatePerson = async (req, res) => {
    try {
        const { id } = req.params
        const { firstname, lastname, age, employmentStatus } = req.body
        const updatePerson = await booKeepingModel.findByIdAndUpdate(id, { firstname, lastname, age, employmentStatus: employmentStatus.toLowerCase() }, { new: true })
        res.status(200).json({ success: true, data: { updatePerson }, message: 'Data successfully updated' })
    } catch (error) {
        res.status(404).json({ success: false, message: error.message })
    }


}
export const deletePerson = async (req, res) => {
    try {
        const { id } = req.params
        const deletePerson = await booKeepingModel.findByIdAndDelete(id)
        res.status(200).json({ success: true, data: { deletePerson }, message: 'Data successfully deleted' })
    } catch (error) {
        res.status(404).json({ success: false, message: error.message })
    }
}
