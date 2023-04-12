const errorCallback = () => {
  throw new Error(
    "Reading or writing files with Edge Functions is not supported yet. " +
      "Visit https://ntl.fyi/edge-functions-filesystem to learn more and tell us about your use cases for file system access."
  );
};

function patchDenoFS<T>(_denoFSmethod: T): T {
  return errorCallback as T;
}

globalThis.Deno.cwd = patchDenoFS(globalThis.Deno.cwd);
globalThis.Deno.readDir = patchDenoFS(globalThis.Deno.readDir);
globalThis.Deno.readFile = patchDenoFS(globalThis.Deno.readFile);
globalThis.Deno.readTextFile = patchDenoFS(globalThis.Deno.readTextFile);
globalThis.Deno.open = patchDenoFS(globalThis.Deno.open);
globalThis.Deno.stat = patchDenoFS(globalThis.Deno.stat);
globalThis.Deno.lstat = patchDenoFS(globalThis.Deno.lstat);
globalThis.Deno.realPath = patchDenoFS(globalThis.Deno.realPath);
globalThis.Deno.readLink = patchDenoFS(globalThis.Deno.readLink);

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
