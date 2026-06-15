import { Link } from "react-router"
import { Heart, ShieldCheck, BookOpen, MessageCircle, ChevronRight, ArrowLeft } from "lucide-react"
import { Button } from "../../components/ui/button"

const stats = [
  { value: "15,000+", label: "Women Reached" },
  { value: "500+", label: "Camps Conducted" },
  { value: "80%", label: "Reduction in Shame" },
  { value: "25+", label: "Districts Active" },
]

const initiatives = [
  {
    icon: ShieldCheck,
    title: "Sanitary Pad Distribution",
    description:
      "Free distribution of biodegradable sanitary pads to adolescent girls and women in rural areas who cannot afford hygiene products.",
  },
  {
    icon: BookOpen,
    title: "Menstrual Health Education",
    description:
      "Conducting awareness sessions in schools and villages to bust myths, reduce stigma, and spread scientifically accurate information.",
  },
  {
    icon: MessageCircle,
    title: "Community Dialogue",
    description:
      "Facilitating open conversations between men, women, and elders to normalise menstruation and build community support systems.",
  },
  {
    icon: Heart,
    title: "ASHA & Anganwadi Linkage",
    description:
      "Training and partnering with local ASHA workers and Anganwadi centres to create a sustained health outreach network.",
  },
]

export function MenstrualHealth() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#C4434A] via-[#A83840] to-[#882C35] text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('/programs/menstrual-health.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative max-w-5xl mx-auto">
          <Link to="/programs" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Programs
          </Link>
          <span className="inline-block bg-white/20 backdrop-blur text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Health
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Menstrual Health
          </h1>
          <p className="text-2xl text-white/80 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            मासिक स्वास्थ्य
          </p>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Breaking taboos and ensuring affordable hygiene access — because menstrual health is not a luxury, it is a right.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-[#C4434A]" style={{ fontFamily: "'Playfair Display', serif" }}>{s.value}</p>
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
              In many rural communities, menstruation is still shrouded in silence, shame, and misinformation. Girls miss school, women are excluded from spaces, and basic hygiene remains inaccessible due to cost and stigma. Babudham Trust is determined to change this reality.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our Menstrual Health program combines product distribution with education and community mobilisation. We don't just provide pads — we shift the narrative, change mindsets, and build sustainable systems that will outlive our presence.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/programs/menstrual-health.png" alt="Menstrual Health" className="w-full h-72 object-cover" />
          </div>
        </div>
      </div>

      {/* Initiatives */}
      <div className="bg-[#FFF0F0] py-16 px-6">
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
                    <Icon className="w-6 h-6 text-[#C4434A]" />
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
      <div className="bg-[#C4434A] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Break the Taboo With Us</h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            ₹300 provides a year's supply of sanitary pads and health education for one girl. Together we can end period poverty.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/donate">
              <Button className="bg-[#D4AF37] hover:bg-[#c4a132] text-white px-8 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
                <Heart className="w-4 h-4" /> Donate Now
              </Button>
            </Link>
            <Link to="/programs">
              <Button variant="outline" className="border-white/50 bg-transparent text-white hover:bg-white hover:text-[#C4434A] px-8 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
                View All Programs <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
