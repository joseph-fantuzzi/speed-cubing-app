import { NextResponse } from "next/dist/server/web/spec-extension/response";

export default function middleware(req) {
  const verify = req.cookies.get("token");
  const url = req.url;

  if (!verify && url === "http://localhost:3000/") {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  if (verify && url === "http://localhost:3000/login") {
    return NextResponse.redirect("http://localhost:3000/");
  }
}
