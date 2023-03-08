import type { Context } from "https://edge.netlify.com";

export default async (req: Request, context: Context) => {
  const d = context.cookies.get("fedb_user");
  if (!d) {
    console.log("sdsd");
    return context.rewrite("/admin/password");
  }
};

export const config = { path: ["/admin*"] };
