
// this does not work when running 
export function GET() {
  return new Response("Hello, world!");
}

export const config = {
  runtime: "nodejs",
};
