import { NextApiHandler } from "next";
import { getRandomQuote } from "../../../util/random-quote";

const handler: NextApiHandler = async (req, res) => {
  try {
    const quote = await getRandomQuote();
    res.status(200).json({ content: quote.content, author: quote?.author });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `An error ocurred on the server. ${error.message}` });
    }
  }
};

export default handler;
