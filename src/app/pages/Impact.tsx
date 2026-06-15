import React from "react";
import { Award, Sun, Stethoscope, Building, FileCheck } from "lucide-react";
import ImpactCarousel from "../components/ImpactCarousel";

export function Impact() {
  const achievements = [
    {
      title: "Health Insurance Smart Card Project",
      icon: <FileCheck className="w-8 h-8" />,
      points: ["Health card creation", "Insurance awareness"],
      color: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      title: "Medical & Disability Camps",
      icon: <Stethoscope className="w-8 h-8" />,
      points: ["Free health checkups & medicine", "Disability certification", "Beneficiary support"],
      color: "bg-green-50 text-green-700 border-green-200"
    },
    {
      title: "Solar Light Installation",
      icon: <Sun className="w-8 h-8" />,
      points: ["Rural solar lighting projects", "Village electrification support"],
      color: "bg-yellow-50 text-yellow-700 border-yellow-200"
    },
    {
      title: "Infrastructure Development",
      icon: <Building className="w-8 h-8" />,
      points: ["Overbridge Development (Ramnagar & Narkatiaganj)", "Bridge Construction Support advocacy"],
      color: "bg-slate-100 text-slate-700 border-slate-200"
    }
  ];

  return (
    <div className="pb-24">
      <div className="bg-slate-900  text-center text-white">
        
        <div className="mt-1">
          <ImpactCarousel />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((item, idx) => (
            <div key={idx} className={`p-8 rounded-3xl border ${item.color}`}>
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <ul className="space-y-2">
                {item.points.map((pt, i) => (
                  <li key={i} className="flex items-center gap-2 font-medium opacity-90">
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span> {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-[#A6192E] rounded-3xl text-white p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Poor Girls Marriage Assistance</h2>
            <p className="text-white/80">Providing financial support and social welfare backing for the marriages of underprivileged girls.</p>
          </div>
          <div className="shrink-0">
            <Award className="w-16 h-16 text-[#D4AF37]" />
          </div>
        </div>
      </div>
    </div>
  );
}
