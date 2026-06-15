import React from "react";

export function Gallery() {
  const images = [
    " public_folder/images/WhatsApp Image 2026-05-11 at 5.59.56 PM (2).jpeg",
    "public_folder/images/WhatsApp Image 2026-05-11 at 5.59.56 PM.jpeg ",
    "public_folder/images/WhatsApp Image 2026-05-11 at 5.59.57 PM (1).jpeg ",
    "public_folder/images/WhatsApp Image 2026-05-11 at 5.59.57 PM (2).jpeg ",
    " public_folder/images/WhatsApp Image 2026-05-11 at 5.59.57 PM.jpeg",
    " public_folder/images/WhatsApp Image 2026-05-11 at 5.59.58 PM (1).jpeg",
    "public_folder/images/WhatsApp Image 2026-05-11 at 5.59.56 PM (1).jpeg",
    "public_folder/images/WhatsApp-Image-2026-05-11-at-5.59.55-PM.jpeg",
    "public_folder/images/WhatsApp Image 2026-05-11 at 6.00.01 PM.jpeg "
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
