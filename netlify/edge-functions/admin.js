export default (request, context) => {
  const text = context.cookies;
  return new Response(JSON.stringify(text));
};
