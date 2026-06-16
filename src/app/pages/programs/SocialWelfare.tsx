import { Link } from "react-router"
import { Heart, Users, Home, Handshake, ChevronRight, ArrowLeft } from "lucide-react"
import { Button } from "../../components/ui/button"

const stats = [
  { value: "5,000+", label: "Families Assisted" },
  { value: "12", label: "Districts Covered" },
  { value: "8 yrs", label: "Of Service" },
  { value: "₹2.5Cr+", label: "Aid Distributed" },
]

const initiatives = [
  {
    icon: Home,
    title: "Shelter Assistance",
    description:
      "Providing roofing materials, repair kits, and temporary shelters to families living in dilapidated housing conditions.",
  },
  {
    icon: Users,
    title: "Community Help Desks",
    description:
      "Running active help desks in villages where community members can seek guidance on government schemes and entitlements.",
  },
  {
    icon: Heart,
    title: "Emergency Relief",
    description:
      "Rapid response during floods, droughts, and other natural calamities — distributing essentials within 48 hours.",
  },
  {
    icon: Handshake,
    title: "Dignity Kits",
    description:
      "Providing hygiene kits, clothing, and household items to vulnerable families restoring their dignity and comfort.",
  },
]

export function SocialWelfare() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#A6192E] via-[#8B1325] to-[#6B0D1C] text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('/programs/social-welfare.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative max-w-5xl mx-auto">
          <Link to="/programs" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Programs
          </Link>
          <span className="inline-block bg-white/20 backdrop-blur text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Community
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Social Welfare
          </h1>
          <p className="text-2xl text-white/80 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            सामाजिक कल्याण
          </p>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Providing essential support and dignity to rural families through community-led assistance programs that transform lives at the grassroots level.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-[#A6192E]" style={{ fontFamily: "'Playfair Display', serif" }}>{s.value}</p>
              <p className="text-sm text-slate-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              About This Program
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Babudham Trust's Social Welfare program is the cornerstone of our mission. We believe that every human being deserves to live with dignity, regardless of their economic circumstances. Our community-led approach ensures that help reaches those who need it most — directly, transparently, and compassionately.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Operating across 12 districts, our volunteers and social workers identify the most vulnerable families and connect them with resources, government schemes, and humanitarian aid. From immediate relief to long-term support planning, we walk alongside families on their journey toward stability.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="public_folder/images/WhatsApp Image 2026-05-11 at 5.59.58 PM (2).jpeg" alt="Social Welfare" className="w-full h-72 object-cover" />
          </div>
        </div>
      </div>

      {/* Initiatives */}
      <div className="bg-[#FDF8F0] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Key Initiatives
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {initiatives.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#A6192E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#A6192E] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Support Social Welfare</h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Your donation directly funds assistance kits, emergency relief, and community help desks that change lives.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/donate">
              <Button className="bg-[#D4AF37] hover:bg-[#c4a132] text-white px-8 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
                <Heart className="w-4 h-4" /> Donate Now
              </Button>
            </Link>
            <Link to="/programs">
              <Button variant="outline" className="border-white/50 bg-transparent text-white hover:bg-white hover:text-[#A6192E] px-8 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
                View All Programs <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
