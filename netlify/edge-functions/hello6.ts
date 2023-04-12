import { Config } from "https://edge.netlify.com";

export default () => new Response("Hello world 3");

export const config: Config = {
  path: ["/hello6/*", "/hello6"],
};
