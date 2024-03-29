interface RandomQuote {
  _id: string;
  // The quotation text
  content: string;
  // The full name of the author
  author: string;
  // The `slug` of the quote author
  authorSlug: string;
  // The length of quote (number of characters)
  length: number;
  // An array of tag names for this quote
  tags: string[];
}

export async function getRandomQuote(): Promise<RandomQuote> {
  const res = await fetch("https://api.quotable.io/random");
  const json = await res.json();
  return json;
}
