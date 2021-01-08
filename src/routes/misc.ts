import { Router, Response, Request } from "express";
import Comment from "../entities/Comment";
import Post from "../entities/Post";

import User from "../entities/User";
import Vote from "../entities/Vote";

import auth from "../middleware/auth";

const vote = async (req: Request, res: Response) => {
  const { identifier, slug, commentIdentifier, value } = req.body;

  //Validate vote value
  if (![-1, 0, 1].includes(value)) {
    return res.status(400).json({ value: "Value must be -1, 0, 1" });
  }

  try {
    const user: User = res.locals.user;
    let post = await Post.findOneOrFail({ identifier, slug });
    let vote: Vote | undefined;
    let comment: Comment | undefined;

    if (commentIdentifier) {
      // if there is a comment identifier find vote by comment
      comment = await Comment.findOneOrFail({ identifier: commentIdentifier });
      vote = await Vote.findOne({ user, comment });
    } else {
      // else find vote by post
      vote = await Vote.findOne({ user, post });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const router = Router();
router.post("/vote", auth, vote);

export default router;
