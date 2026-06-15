import { Link } from "react-router"
import { Button } from "../components/ui/button"
import { Heart, Handshake, ArrowRight } from "lucide-react"

type Program = {
  title: string
  hindi: string
  description: string
  badge: string
  image: string
  slug: string
}

const programs: Program[] = [
  {
    title: "Social Welfare",
    hindi: "सामाजिक कल्याण",
    badge: "Community",
    slug: "social-welfare",
    description:
      "Providing essential support and dignity to rural families through community-led assistance programs.",
    image: "/programs/social-welfare.png",
  },
  {
    title: "Education Support",
    hindi: "शिक्षा सहायता",
    badge: "Education",
    slug: "education-support",
    description:
      "Empowering students with essential books, learning materials, and modern educational tools.",
    image: "/programs/education-support.png",
  },
  {
    title: "Grain Support",
    hindi: "अनाज सहायता",
    badge: "Food Security",
    slug: "grain-support",
    description:
      "Ensuring no family goes hungry through monthly distribution of grains and nutritional essentials.",
    image: "/programs/grain-support.png",
  },
  {
    title: "Women Empowerment",
    hindi: "महिला सशक्तिकरण",
    badge: "Empowerment",
    slug: "women-empowerment",
    description:
      "Providing vocational training and skill-building workshops to create sustainable livelihoods for rural women.",
    image: "/programs/women-empowerment.png",
  },
  {
    title: "Menstrual Health",
    hindi: "मासिक स्वास्थ्य",
    badge: "Health",
    slug: "menstrual-health",
    description:
      "Breaking taboos by providing health awareness and ensuring affordable hygiene access to women.",
    image: "/programs/menstrual-health.png",
  },
  {
    title: "Girl Child Education",
    hindi: "बालिका शिक्षा",
    badge: "Education",
    slug: "girl-child-education",
    description:
      "Building a brighter future for daughters of rural India through enrollment and long-term mentorship.",
    image: "/programs/girl-child-education.png",
  },
]

function ProgramCard({ program }: { program: Program }) {
  return (
    <Link
      to={`/programs/${program.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={program.image || "/placeholder.svg"}
          alt={program.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-md bg-card/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary backdrop-blur">
          {program.badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-serif text-xl font-bold text-foreground">{program.title}</h3>
        <p className="text-xs font-medium uppercase tracking-wide text-primary/70">{program.hindi}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{program.description}</p>
        <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-200">
          Learn More <ArrowRight className="size-4" />
        </div>
      </div>
    </Link>
  )
}

export function Programs() {
  return (
    <section className="bg-[oklch(0.97_0.02_95)] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground text-balance md:text-5xl">
            Our Programs
          </h2>
          <p className="mt-2 font-serif text-xl text-primary/80">हमारे कार्यक्रम</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
            BabuDhamTrust is committed to transforming rural lives through dedicated, integrity-led grassroots work,
            ensuring every individual moves from scarcity to empowerment.
          </p>
          <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-primary" />
        </header>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[oklch(0.28_0.04_200)] px-8 py-10 text-[oklch(0.97_0_0)] md:flex-row md:items-center">
          <div>
            <h3 className="font-serif text-2xl font-bold md:text-3xl">Be Part of the Change</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[oklch(0.85_0.02_200)]">
              Join Bedakhani Trust in our mission to empower rural India. Your contribution creates lasting impact.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <Button className="rounded-full bg-[oklch(0.62_0_13_155)] px-6 text-[oklch(0.99_0_0)] hover:bg-[oklch(0.56_0_13_155)]">
              <Heart className="size-4" />
              Donate Now
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-[oklch(0.97_0_0)] bg-transparent px-6 text-[oklch(0.97_0_0)] hover:bg-[oklch(0.97_0_0)] hover:text-[oklch(0.28_0_04_200)]"
            >
              <Handshake className="size-4" />
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
