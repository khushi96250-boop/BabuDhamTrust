import { Link } from "react-router"
import { Heart, BookOpen, Laptop, GraduationCap, ChevronRight, ArrowLeft } from "lucide-react"
import { Button } from "../../components/ui/button"

const stats = [
  { value: "3,200+", label: "Students Supported" },
  { value: "180+", label: "Schools Covered" },
  { value: "₹80L+", label: "Materials Distributed" },
  { value: "94%", label: "Retention Rate" },
]

const initiatives = [
  {
    icon: BookOpen,
    title: "Free Book Distribution",
    description:
      "Distributing textbooks, notebooks, and stationery to underprivileged students every academic year so cost is never a barrier to learning.",
  },
  {
    icon: Laptop,
    title: "Digital Literacy Drive",
    description:
      "Setting up computer labs and tablet-based learning centres in rural schools to bridge the digital divide.",
  },
  {
    icon: GraduationCap,
    title: "Scholarship Program",
    description:
      "Awarding merit-cum-need scholarships to high-achieving students from BPL families to continue higher education.",
  },
  {
    icon: Heart,
    title: "Teacher Training",
    description:
      "Conducting workshops and capacity-building sessions for local teachers to improve the quality of education delivery.",
  },
]

export function EducationSupport() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#1A3A6B] via-[#15305A] to-[#0E2241] text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('/programs/education-support.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative max-w-5xl mx-auto">
          <Link to="/programs" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Programs
          </Link>
          <span className="inline-block bg-white/20 backdrop-blur text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Education
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Education Support
          </h1>
          <p className="text-2xl text-white/80 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            शिक्षा सहायता
          </p>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Empowering students with essential books, learning materials, and modern educational tools — because every child deserves to learn.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-[#1A3A6B]" style={{ fontFamily: "'Playfair Display', serif" }}>{s.value}</p>
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
              Education is the single most powerful tool to lift communities out of poverty. Babudham Trust's Education Support program ensures that financial constraints never become a reason for a child to drop out of school. We provide end-to-end support — from basic stationery to higher education scholarships.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Working with over 180 schools across rural areas, we have built a network of volunteers, teachers, and community leaders who collectively monitor student welfare, flag dropouts early, and intervene with targeted support programs.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/programs/education-support.png" alt="Education Support" className="w-full h-72 object-cover" />
          </div>
        </div>
      </div>

      {/* Initiatives */}
      <div className="bg-[#F0F5FF] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Key Initiatives
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {initiatives.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#1A3A6B]" />
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
      <div className="bg-[#1A3A6B] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Sponsor a Child's Education</h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            A small contribution from you can fund an entire year of books and materials for a child in need.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/donate">
              <Button className="bg-[#D4AF37] hover:bg-[#c4a132] text-white px-8 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
                <Heart className="w-4 h-4" /> Donate Now
              </Button>
            </Link>
            <Link to="/programs">
              <Button variant="outline" className="border-white/50 bg-transparent text-white hover:bg-white hover:text-[#1A3A6B] px-8 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
                View All Programs <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
