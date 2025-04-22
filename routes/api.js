import express from "express";
const router = express.Router();

import * as controlers from "../controllers/controllers.js";

// Create Route
router.post("/createTodo", controlers.createTodo);

// Read Route
router.post("/readTodo", controlers.createTodo);

// Update Route
router.post("/updateTodo", controlers.createTodo);

// Delete Route
router.post("/deleteTodo", controlers.createTodo);

export default router;
