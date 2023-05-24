import User from "../models/User.js";

// a controller function for updating a user
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// a controller function for deleting a user
export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser);
  } catch (error) {
    next(error);
  }
};

// a controller function for fetching a user
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// a controller function for fetching all users
export const getAllUsers = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
