"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Client-side redirect for moved pages (static export has no server
 * redirects). The page rendering this also shows a visible link as the
 * no-JS fallback.
 */
export function Redirect({ to }: { to: string }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(to);
  }, [router, to]);
  return null;
}
