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
            return person.employStatus === 'employed'
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
            return person.employStatus === 'unemployed'
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
        const newPerson = await booKeepingModel.create({ firstname, lastname, age, employmentStatus }, { session })
        await session.commitTransaction()
        res.status(200).json({ success: true, data: { newPerson }, message: 'Signed up successfully' })
    } catch (error) {
        await session.abortTransaction()
        res.status(404).json({ success: false, message: error.message })
    } finally {
        session.endSession()
    }
}
