import React from "react";

export function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1774070674881-af1489b32a75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBydXJhbCUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3ODA2NjExOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1739242613988-aa1e634cec1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2hlY2t1cCUyMGluZGlhfGVufDF8fHx8MTc4MDY2MTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1534332778004-2ca43da63ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21lbiUyMGVtcG93ZXJtZW50fGVufDF8fHx8MTc4MDY2MTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/flagged/photo-1577604981316-298e453a19dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwY2hhcml0eSUyMGluZGlhfGVufDF8fHx8MTc4MDY2MTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBuZ28lMjBjaGFyaXR5fGVufDF8fHx8MTc4MDY2MTIzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586726370832-3440a511e479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWxwaW5nJTIwaGFuZHMlMjBjb21wYXNzaW9ufGVufDF8fHx8MTc4MDY2MTIzMHww&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#A6192E] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Gallery</h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">Glimpses of our initiatives, camps, and the smiles we strive to bring to the community.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-slate-200">
            <img src={src} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
