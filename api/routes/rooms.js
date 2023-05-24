import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";

const router = express.Router();
import { verifyAdmin } from "../utils/verifyToken.js";

/* WE NEED TO CREATE, DELETE, UPDATE, GETSINGLE , GET ALL rooms
 */
// to create room
router.post("/:hotelid", verifyAdmin, createRoom);
// to update a single room
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

// to delete a room
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// to get specificroom
router.get("/:id", getRoom);

// to get allrooms
router.get("/", getAllRooms);
export default router;
