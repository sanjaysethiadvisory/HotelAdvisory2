import { ArrowUpRight } from "lucide-react";

const timeline = [
  {
    period: "1991 — 2006",
    role: "Senior Leadership",
    company: "Taj Group of Hotels (IHCL)",
    description: "14 years of progressive leadership — General Manager and Area Director positions — building deep operational expertise across landmark properties including Taj Bengal Calcutta, Jai Mahal Palace Jaipur, and Area Director Hyderabad.",
    highlight: "Operational Mastery",
  },
  {
    period: "2006 — 2014",
    role: "Co-Founder, CEO & Managing Director",
    company: "Keys Hotels & Resorts (Berggruen Hotels)",
    description: "Co-founded and built a portfolio of hotels from the ground up across budget and mid-market segments, establishing Keys as a recognised Indian hospitality brand.",
    highlight: "Brand Creation",
  },
  {
    period: "2015 — Jan 2026",
    role: "Managing Director & CEO",
    company: "Chalet Hotels Limited",
    description: "Led a successful IPO, drove asset strategy, and expanded the portfolio to 3,000+ keys across premium properties in partnership with Marriott, Hyatt, Accor and IHCL. Grew market cap to ~$2B. Ranked 2nd globally in DJSI among hotel, resort & cruise companies.",
    highlight: "IPO Leadership",
  },
  {
    period: "Feb 2026 — Present",
    role: "Non-Executive Director",
    company: "Chalet Hotels Limited",
    description: "Independent board director at one of India's leading upper-upscale hotel companies, listed on BSE and NSE.",
    highlight: "Board & Governance",
  },
  {
    period: "2026 — Present",
    role: "Founder & Principal Advisor",
    company: "Sanjay Sethi Advisory",
    description: "Strategic counsel to private equity firms, institutional investors, developers, and boards on India hospitality investment and growth.",
    highlight: "Advisory",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-card border-t border-border scroll-mt-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pt-20 lg:pt-28 pb-20 lg:pb-28">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-border pb-10 mb-0">
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary mb-4">Career Snapshot</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-snug max-w-xl">
              Four Decades.<br />Four Chapters.
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-xs lg:text-right">
            Taj Group · Keys Hotels · Chalet Hotels · Independent Advisory
          </p>
        </div>
        <div className="divide-y divide-border">
          {timeline.map((item, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-10">
              <div className="lg:col-span-2">
                <p className="text-sm text-muted-foreground font-mono">{item.period}</p>
              </div>
              <div className="lg:col-span-7">
                <p className="font-serif text-xl font-semibold text-foreground mb-1">{item.role}</p>
                <p className="text-primary text-sm font-medium mb-3">{item.company}</p>
                <p className="text-muted-foreground text-base leading-relaxed">{item.description}</p>
              </div>
              <div className="lg:col-span-3 lg:text-right">
                <span className="inline-block text-xs font-semibold tracking-wide uppercase bg-background border border-border px-3 py-1 text-muted-foreground">
                  {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
