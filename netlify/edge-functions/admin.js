export default (request, context) => {
  const text = context.cookies.get("nf_jwt");

  context.log(Deno.env.get("JWT_SECRET"));
  return new Response(text);
};
