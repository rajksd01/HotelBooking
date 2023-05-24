import express from "express";
const router = express.Router();

import {
  createHotel,
  deleteHotel,
  updateHotel,
  getHotel,
  getAllHotels,
  countByCity,
  countByType,
  getHotelRooms,
} from "../controllers/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

/* WE NEED TO CREATE, DELETE, UPDATE, GETSINGLE , GET ALL HOTELS
 */
// to create hotels
router.post("/", verifyAdmin, createHotel);
// to update a single hotel
router.put("/:id", verifyAdmin, updateHotel);

// to delete a hotel
router.delete("/:id", verifyAdmin, deleteHotel);

// to get specific hotel
router.get("/find/:id", getHotel);

// to get all hotel
router.get("/", getAllHotels);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
// to fetch rooms
router.get("/room/:id", getHotelRooms);

export default router;
