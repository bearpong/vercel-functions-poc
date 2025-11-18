
export function GET() {
  return new Response("Hello, world!");
}

export const config = {
  runtime: "edge",
};
