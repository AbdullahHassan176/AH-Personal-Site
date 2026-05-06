export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="footer"
      className="bg-[#EFE6DA] border-t border-[#D6C3A3]/30"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="text-2xl font-playfair font-bold mb-4">
              <span className="text-[#1A1A1A]">Abdullah&nbsp;</span>
              <span className="text-[#6B1F2A]">Hassan</span>
            </div>
            <p className="text-[#5F5A55] text-sm leading-relaxed mb-6 max-w-xs">
              Quant-minded AI leader and financial modeller — DCF, NAV, lending, NF-GARCH, and tokenised trade infrastructure operating out of Dubai and global lanes.
            </p>
            {/* Social icon */}
            <a
              href="https://www.linkedin.com/in/abdullah-hassan-635a831b6/"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F5EFE6] border border-[#D6C3A3]/40 text-[#6B1F2A] transition-all duration-200 hover:bg-[#6B1F2A] hover:text-[#C6A15B] hover:border-[#6B1F2A] hover:shadow-[0_4px_16px_rgba(107,31,42,0.25)]"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#1A1A1A] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/',         label: 'Home' },
                { href: '/about',    label: 'About' },
                { href: '/projects', label: 'Projects' },
                { href: '/ventures', label: 'Ventures' },
                { href: '/skills',   label: 'Skills' },
                { href: '/blog',     label: 'Blog' },
                { href: '/contact',  label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-[#5F5A55] hover:text-[#6B1F2A] transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#1A1A1A] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-[#5F5A55]">
              <div>
                <a
                  href="mailto:abdullah.hassan@globalnext.rocks"
                  className="hover:text-[#6B1F2A] transition-colors duration-200"
                >
                  abdullah.hassan@globalnext.rocks
                </a>
              </div>
              <div>+27 82 551 1243</div>
              <div className="text-[#B8AEA1] text-xs mt-1">UAE · South Africa · Global</div>
            </div>

            {/* Accent line */}
            <div className="mt-6 flex items-center gap-2">
              <div className="h-px flex-1 bg-[#C6A15B]/30" />
              <span className="text-[#C6A15B] text-xs font-mono tracking-widest uppercase">Est. 2022</span>
              <div className="h-px flex-1 bg-[#C6A15B]/30" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#D6C3A3]/40 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#B8AEA1] text-xs">
            &copy; {currentYear} Abdullah Hassan. All rights reserved.
          </p>
          <p className="text-[#B8AEA1] text-xs font-mono tracking-wide">
            ZA &nbsp;·&nbsp; UAE &nbsp;·&nbsp; Global
          </p>
        </div>
      </div>
    </footer>
  )
}
