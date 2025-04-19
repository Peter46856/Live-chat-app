import express from "express";

import { getUserStories, sendStory } from "../controllers/stories.controller";
import { protectRoute } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/get-user-stories", protectRoute, getUserStories);
router.post("/send/:id", protectRoute, sendStory);

export default router;