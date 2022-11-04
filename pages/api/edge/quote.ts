import { getRandomQuote } from "../../../util/random-quote";

export const config = {
  runtime: "experimental-edge"
};

export default async function handler() {
  try {
    const quote = await getRandomQuote();

    return new Response(JSON.stringify({ content: quote.content, author: quote?.author }), { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ message: `An error ocurred on the server. ${error.message}` }), {
        status: 500
      });
    }
  }
}
