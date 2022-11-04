export const config = {
  runtime: "experimental-edge"
};

export default function handler() {
  return new Response(JSON.stringify({ message: "This is another quote" }), { status: 200 });
}
