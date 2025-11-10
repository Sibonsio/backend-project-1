import Router from "express";
import { getAllPeople, getPerson, getEmployedPeople, getUnemployedPeople } from "../controllers/booKeepingController";

const booKeepingRoute = Router();

booKeepingRoute.get('/', getAllPeople)
booKeepingRoute.get('/employed', getEmployedPeople)
booKeepingRoute.get('/unemployed', getUnemployedPeople)
booKeepingRoute.get('/:id', getPerson)

export default booKeepingRoute