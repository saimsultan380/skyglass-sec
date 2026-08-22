import { NextResponse, type NextRequest } from "next/server";
import {
  CANONICAL_HOST,
  CANONICAL_ORIGIN,
  resolveLegacyRedirect,
} from "@/lib/redirects";

/**
 * Legacy URLs and the www host are handled here rather than in
 * `next.config.ts` because Proxy runs before the `trailingSlash`
 * normalisation. Doing it in `redirects()` costs an extra 308 hop for any
 * source without a trailing slash; this keeps every legacy URL at one 301.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const host = (request.headers.get("host") ?? "").toLowerCase();
  const destination = resolveLegacyRedirect(pathname);

  if (host === `www.${CANONICAL_HOST}`) {
    const target = new URL(destination ?? pathname, CANONICAL_ORIGIN);
    target.search = search;
    return NextResponse.redirect(target, 301);
  }

  if (destination) {
    const target = new URL(destination, request.nextUrl.origin);
    target.search = search;
    return NextResponse.redirect(target, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next internals and any request for a file with an extension.
  matcher: ["/((?!_next/|.*\\.).*)"],
};
