import { Config } from "https://edge.netlify.com";
import { configAsync } from "https://deno.land/x/dotenv/mod.ts";

try {
  // when running locally, we need to call this
  // it'll eerror in Netlify prod, but that's okay
  await configAsync({ export: true });
} catch (err) {
  // ignore the error on netlify Prod
}

export default () => new Response("Hello world");

export const config: Config = {
  path: ["/hello/*", "/hello"],
};
