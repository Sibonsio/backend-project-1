import Router from "express";
import { getAllPeople, getPerson, getEmployedPeople, getUnemployedPeople, signUp } from "../controllers/booKeepingController";

const booKeepingRoute = Router();

booKeepingRoute.get('/', getAllPeople)
booKeepingRoute.get('/employed', getEmployedPeople)
booKeepingRoute.get('/unemployed', getUnemployedPeople)
booKeepingRoute.get('/:id', getPerson)
booKeepingRoute.post('/signup', signUp)

export default booKeepingRoute