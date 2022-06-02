import { GoTrueApi } from "https://deno.land/x/gotrue/mod.ts";

const api = new GoTrueApi({
  url: "https://tschinder.space/.netlify/identity",
});

export default async (request, context) => {
  const token = context.cookies.get("nf_jwt");
  const user = token && (await api.getUser(token));

  context.log(token, user);

  if (!token || !user) {
    return new Response("No", {
      status: 401,
      statusText: "Login required",
    });
  }
  return new Response("Secret");
};
