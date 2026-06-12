import type { Metadata } from "next";
import Link from "next/link";
import { Redirect } from "@/components/Redirect";
import { Section } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Moved — About",
  robots: { index: false },
};

/** The old /team page now lives at /about. Kept so old links don't dead-end. */
export default function TeamMovedPage() {
  return (
    <Section className="pt-40">
      <Redirect to="/about" />
      <h1 className="text-2xl font-semibold tracking-tight">This page moved</h1>
      <p className="mt-4 text-base text-muted">
        Everything about the team now lives on the{" "}
        <Link
          href="/about"
          className="font-medium text-accent hover:text-accent-strong"
        >
          About page
        </Link>
        . Taking you there…
      </p>
    </Section>
  );
}
