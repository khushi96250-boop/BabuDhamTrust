import { Link } from "react-router"
import { Heart, Package, Truck, ShoppingBasket, ChevronRight, ArrowLeft } from "lucide-react"
import { Button } from "../../components/ui/button"

const stats = [
  { value: "10,000+", label: "Families Fed" },
  { value: "50 tons", label: "Grain Distributed/yr" },
  { value: "20+", label: "Villages Covered" },
  { value: "0%", label: "Administrative Fee" },
]

const initiatives = [
  {
    icon: Package,
    title: "Monthly Grain Kits",
    description:
      "Every month, BPL families receive 10–20 kg of staple grains (rice, wheat, dal) — enough to sustain a family of four for 2–3 weeks.",
  },
  {
    icon: Truck,
    title: "Door-step Delivery",
    description:
      "We deliver directly to the doorsteps of elderly, disabled, and bed-ridden individuals who cannot travel to distribution centres.",
  },
  {
    icon: ShoppingBasket,
    title: "Nutritional Supplements",
    description:
      "Beyond grains, we include fortified biscuits, jaggery, and oil to improve nutritional outcomes — especially for children under 5.",
  },
  {
    icon: Heart,
    title: "Festival Special Drives",
    description:
      "During Diwali, Eid, and other festivals we distribute special food packages so every family can celebrate with joy.",
  },
]

export function GrainSupport() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#7B5E2A] via-[#6A4E21] to-[#4E3816] text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('/programs/grain-support.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative max-w-5xl mx-auto">
          <Link to="/programs" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Programs
          </Link>
          <span className="inline-block bg-white/20 backdrop-blur text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Food Security
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Grain Support
          </h1>
          <p className="text-2xl text-white/80 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            अनाज सहायता
          </p>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Ensuring no family goes hungry through monthly distribution of grains and nutritional essentials to the most vulnerable communities.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-[#7B5E2A]" style={{ fontFamily: "'Playfair Display', serif" }}>{s.value}</p>
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
              Hunger is an invisible crisis that hides behind closed doors in rural India. Babudham Trust's Grain Support program is dedicated to ending food insecurity in the communities we serve. Through systematic identification of BPL (Below Poverty Line) households, we ensure monthly grain distribution reaches where it is needed most.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our zero-waste, zero-overhead model means every rupee donated goes directly to food. Local volunteers manage logistics, community elders verify beneficiary lists, and our central team ensures timely procurement of quality grains.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/programs/grain-support.png" alt="Grain Support" className="w-full h-72 object-cover" />
          </div>
        </div>
      </div>

      {/* Initiatives */}
      <div className="bg-[#FDF6EC] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Key Initiatives
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {initiatives.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#7B5E2A]" />
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
      <div className="bg-[#7B5E2A] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Feed a Family This Month</h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            ₹500 feeds a family of four for two weeks. Your generosity can fill empty plates today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/donate">
              <Button className="bg-[#D4AF37] hover:bg-[#c4a132] text-white px-8 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
                <Heart className="w-4 h-4" /> Donate Now
              </Button>
            </Link>
            <Link to="/programs">
              <Button variant="outline" className="border-white/50 bg-transparent text-white hover:bg-white hover:text-[#7B5E2A] px-8 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
                View All Programs <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
