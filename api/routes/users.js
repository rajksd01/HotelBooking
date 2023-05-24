import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// // for validation of token
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send(" You are logged in");
// });
// // for validation of user
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send(" You are logged in and can delete your account");
// });
// // for validation of admin
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send(" You are logged in as admin");
// });

// to update the user
router.put("/:id", verifyUser, updateUser);

// to delete a user
router.delete("/:id", verifyUser, deleteUser);

// to get specific user
router.get("/:id", verifyUser, getUser);

// to display alll users
router.get("/", verifyAdmin, getAllUsers);

export default router;
