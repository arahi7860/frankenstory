import Story from "../models/Story.js";
// import User from "../models/users.js";
// import jwt from "jsonwebtoken";

// const TOKEN_KEY = process.env.TOKEN_KEY;

export const GetStories = async (req, res) => {
  const activeStories = await Story.find();
  return res.json(activeStories);
};

export const GetStoryById = async (req, res) => {
  const id = req.params.id;
  const story = await Story.findById(id);
  return res.json(story);
};

export const CreateStory = async (req, res) => {
  const newStory = await Story.create(req.body);
  // await newStory.save();
  res.status(201).json(newStory);
};

export const UpdateStory = async (req, res) => {
  const id = req.params.id;
  const story = await Story.findByIdAndUpdate(id, req.body);
  res.status(201).json(story);
};

export const GetFinishedStories = async (req, res) => {
  const activeStories = await Story.find(completed === true);
  return res.json(activeStories);
};
