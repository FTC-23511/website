import type { Metadata } from "next";
import { Section } from "@/components/primitives";
import { site, socials } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  robots: { index: false },
};

/**
 * Contact lives in the footer of every page now (SPEC v2 §2). This slim
 * page exists only so old /contact links keep working.
 */
export default function ContactPage() {
  return (
    <Section className="pt-40">
      <h1 className="text-2xl font-semibold tracking-tight">
        Reaching the team
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
        Contact info now lives in the footer of every page. The short version:
        email{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-medium text-accent hover:text-accent-strong"
        >
          {site.email}
        </a>{" "}
        for classes and general questions, or{" "}
        <a
          href={`mailto:${site.businessEmail}`}
          className="font-medium text-accent hover:text-accent-strong"
        >
          {site.businessEmail}
        </a>{" "}
        for sponsorships.
      </p>
      <ul className="mt-8 flex flex-wrap gap-3">
        {socials.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-hairline px-5 py-2.5 text-sm text-muted transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
