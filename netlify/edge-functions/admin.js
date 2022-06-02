export default (request, context) => {
  const text = context.cookies.get("nf_jwt");
  return new Response(text);
};
