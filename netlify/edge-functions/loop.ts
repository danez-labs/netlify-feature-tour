import type { Context } from "https://edge.netlify.com";

export default async (req: Request, context: Context) => {
  if (req.method === "POST") {
    const formData = await req.formData();
    const password = formData.get("password");
    console.log("Comparing ", password);
    const headers = new Headers({ Location: req.url });
    if (password === Deno.env.get("ADMIN_PASSWORD")) {
      headers.set(
        "Set-Cookie",
        "fedb_user=admin; Secure; HttpOnly; Max-Age=31536000"
      );
    }
    return new Response(null, { status: 302, headers });
  }

  const d = context.cookies.get("fedb_user");
  if (!d) {
    return context.rewrite("/admin/password");
  }
};

export const config = { path: ["/admin*", "/.netlify/functions/log"] };
