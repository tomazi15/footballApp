import { Request, Response } from "express";
import ClubModel from "../models/Club.model";
import { TClub } from "../types";

async function getAllClubs(req: Request, res: Response) {
  try {
    const clubs: TClub[] = await ClubModel.find();
    res.status(200).json(clubs);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = { getAllClubs };
