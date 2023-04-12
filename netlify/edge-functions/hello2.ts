const errorCallback = () => {
  throw new Error(
    "Reading or writing files with Edge Functions is not supported yet. " +
      "Visit https://ntl.fyi/edge-functions-filesystem to learn more and tell us about your use cases for file system access."
  );
};

globalThis.Deno.cwd = errorCallback;
globalThis.Deno.readDir = errorCallback;
globalThis.Deno.readFile = errorCallback;
globalThis.Deno.readTextFile = errorCallback;
globalThis.Deno.open = errorCallback;
globalThis.Deno.stat = errorCallback;
globalThis.Deno.lstat = errorCallback;
globalThis.Deno.realPath = errorCallback;
globalThis.Deno.readLink = errorCallback;

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
  path: ["/hello2/*", "/hello2"],
};
