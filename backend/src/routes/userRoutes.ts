import express from "express";
import { getUserDetails } from "../controllers/userControllers";

const router = express.Router();

router.get("/getuserprofile/:id", getUserDetails);

export { router };
