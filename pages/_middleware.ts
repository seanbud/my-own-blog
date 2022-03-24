import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const dev = process.env.NODE_ENV !== "production";

  if (!dev && req.nextUrl.protocol === "http:") {
    return NextResponse.redirect(`https://${req.nextUrl.host}/${req.url}`);
  }
}
