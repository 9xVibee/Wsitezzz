import { Request, Response } from "express";
import { User } from "../models/User";

//! Getting user details using username
export const getUserDetails = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({
      username: id,
    });

    // check if user exists
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User found",
      user,
    });
  } catch (err) {
    console.log("Error in getUserDetails route", err);
    res.status(500).json({
      message: "Some error occured",
    });
  }
};
