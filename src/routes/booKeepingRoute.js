import Router from "express";
import { getAllPeople, getPerson, getEmployedPeople, getUnemployedPeople, signUp, updatePerson, deletePerson } from "../controllers/booKeepingController.js";

const booKeepingRoute = Router();

booKeepingRoute.get('/', getAllPeople)
booKeepingRoute.get('/employed', getEmployedPeople)
booKeepingRoute.get('/unemployed', getUnemployedPeople)
booKeepingRoute.get('/:id', getPerson)
booKeepingRoute.post('/signup', signUp)
booKeepingRoute.patch('/:id', updatePerson)
booKeepingRoute.delete('/:id', deletePerson)

export default booKeepingRoute