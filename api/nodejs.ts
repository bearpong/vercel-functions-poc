import { test } from "../src/test";

// this does not work when running 
export function GET() {
  test();
  return new Response("Hello, world!");
}

export const config = {
  runtime: "nodejs",
};
