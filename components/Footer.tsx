import Link from "next/link";
import { navLinks, site, socials } from "@/content/team";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
              {site.location} · est. {site.rookieYear} · {site.nonprofit}
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
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-hairline pt-6 text-xs leading-relaxed text-faint">
          {site.name} is a {site.nonprofit.toLowerCase()} competing in the{" "}
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
