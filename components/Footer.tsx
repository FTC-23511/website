import Link from "next/link";
import { donations, navLinks, site, socials } from "@/content/site";

/**
 * The footer carries all contact info — there is no /contact page (SPEC v2
 * §2). Email, socials, and donation links live here on every page.
 */
export function Footer() {
  return (
    <footer id="contact" className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2">
            <p className="text-sm font-semibold">
              {site.name}{" "}
              <span className="font-mono text-xs text-faint">
                #{site.teamNumber}
              </span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {site.mission}
            </p>
            <p className="mt-3 text-xs text-faint">
              {site.location} · est. {site.rookieYear} ·{" "}
              {site.funding.toLowerCase()}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-medium uppercase tracking-wider text-faint">
              Site
            </p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-faint">
              Contact
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-sm text-muted transition-colors hover:text-foreground"
                >
                  {site.email}
                </a>
                <p className="text-xs text-faint">
                  Classes and everything else
                </p>
              </li>
              <li>
                <a
                  href={`mailto:${site.businessEmail}`}
                  className="break-all text-sm text-muted transition-colors hover:text-foreground"
                >
                  {site.businessEmail}
                </a>
                <p className="text-xs text-faint">Sponsorships</p>
              </li>
              <li>
                <a
                  href={donations[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent transition-colors hover:text-accent-strong"
                >
                  Donate →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-faint">
              Elsewhere
            </p>
            <ul className="mt-3 space-y-2">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-hairline pt-6 text-xs leading-relaxed text-faint">
          {site.name} is a student robotics team competing in the{" "}
          <a
            href="https://www.firstinspires.org/robotics/ftc"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-hairline underline-offset-2 hover:text-muted"
          >
            FIRST® Tech Challenge
          </a>
          . FIRST® and FIRST® Tech Challenge are registered trademarks of
          FIRST®, which does not sponsor or endorse this site.
        </p>
      </div>
    </footer>
  );
}
