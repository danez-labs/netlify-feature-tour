import { Config } from "https://edge.netlify.com";

export default () => new Response("Hello world 4");

export const config: Config = {
  path: ["/hello6/*", "/hello6"],
};
