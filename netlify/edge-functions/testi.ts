import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const response = await context.next();
  const content = await response.text();

  console.log("test");

  return new Response(String(content), response);
};

export const config = {
  path: ["/*"],
};
