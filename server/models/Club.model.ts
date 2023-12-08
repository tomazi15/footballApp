import { model, Model, Schema } from "mongoose";
import { TClub } from "../types";

const clubSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  stadium: {
    type: String,
    required: true,
  },
  stadiumCapacity: {
    type: Number,
    required: true,
  },
  manager: {
    type: String,
    required: true,
  },
  players: {
    type: [String],
    required: true,
  },
  trophies: {
    type: Schema.Types.Mixed,
    required: true,
  },
});

const ClubModel: Model<TClub> = model<TClub>("Club", clubSchema);
export default ClubModel;
