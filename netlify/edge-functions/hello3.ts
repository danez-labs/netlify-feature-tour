import { Config } from "https://edge.netlify.com";

try {
  // when running locally, we need to call this
  // it'll eerror in Netlify prod, but that's okay
  await Deno.readFile("assd");
} catch (err) {
  // ignore the error on netlify Prod
}

export default () => new Response("Hello world");

export const config: Config = {
  path: ["/hello3/*", "/hello3"],
};
