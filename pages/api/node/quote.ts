import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  res.status(200).json({ message: "This is a random quote my friend" });
};

export default handler;
