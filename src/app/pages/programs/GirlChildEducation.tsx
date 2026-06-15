import { Link } from "react-router"
import { Heart, GraduationCap, Users, Star, ChevronRight, ArrowLeft } from "lucide-react"
import { Button } from "../../components/ui/button"

const stats = [
  { value: "1,800+", label: "Girls Enrolled" },
  { value: "96%", label: "School Retention" },
  { value: "120+", label: "Villages Reached" },
  { value: "200+", label: "Mentors Active" },
]

const initiatives = [
  {
    icon: GraduationCap,
    title: "Enrolment Drives",
    description:
      "Working with families, community leaders, and local administration to identify and enrol out-of-school girls into formal education.",
  },
  {
    icon: Users,
    title: "Mentorship Program",
    description:
      "Pairing each girl with a trained woman mentor from her community who guides her through academic challenges and personal growth.",
  },
  {
    icon: Star,
    title: "Merit Scholarships",
    description:
      "Awarding annual scholarships to girls who excel academically, encouraging continuation into higher education and careers.",
  },
  {
    icon: Heart,
    title: "Family Sensitisation",
    description:
      "Conducting sessions with parents and guardians to shift mindsets about girls' education and long-term societal benefits.",
  },
]

export function GirlChildEducation() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#1A6B4A] via-[#155A3E] to-[#0E4530] text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('/programs/girl-child-education.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative max-w-5xl mx-auto">
          <Link to="/programs" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Programs
          </Link>
          <span className="inline-block bg-white/20 backdrop-blur text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Education
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Girl Child Education
          </h1>
          <p className="text-2xl text-white/80 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            बालिका शिक्षा
          </p>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Building a brighter future for daughters of rural India through enrolment drives, mentorship, and long-term educational support.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-[#1A6B4A]" style={{ fontFamily: "'Playfair Display', serif" }}>{s.value}</p>
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
              Educating a girl is the most transformative investment a society can make. Yet in rural India, millions of girls are kept out of school due to poverty, patriarchy, early marriage, and safety concerns. Babudham Trust's Girl Child Education program tackles these barriers head-on.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Through community outreach, family counselling, and a robust mentorship framework, we have helped over 1,800 girls re-enter or remain in school. Our 96% retention rate speaks to the depth and sincerity of our engagement with both the girls and their families.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/programs/girl-child-education.png" alt="Girl Child Education" className="w-full h-72 object-cover" />
          </div>
        </div>
      </div>

      {/* Initiatives */}
      <div className="bg-[#F0FAF5] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Key Initiatives
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {initiatives.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#1A6B4A]" />
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
      <div className="bg-[#1A6B4A] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Invest in a Girl's Future</h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            ₹2,000 sponsors a girl's education for an entire year — books, mentorship, and scholarship support included.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/donate">
              <Button className="bg-[#D4AF37] hover:bg-[#c4a132] text-white px-8 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
                <Heart className="w-4 h-4" /> Donate Now
              </Button>
            </Link>
            <Link to="/programs">
              <Button variant="outline" className="border-white/50 bg-transparent text-white hover:bg-white hover:text-[#1A6B4A] px-8 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
                View All Programs <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
