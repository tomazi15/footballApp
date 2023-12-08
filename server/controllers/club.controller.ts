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

async function getClub(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const club = await ClubModel.findById(id);
    res.status(200).json(club);
  } catch (error) {
    res.status(404).json({ error: "No club found with this id" });
  }
}

module.exports = { getAllClubs, getClub };
