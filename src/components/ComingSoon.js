import React from "react";

export default function ComingSoon() {
  return (
    <div className="relative w-full h-screen bg-[#007BA7] overflow-hidden">
      {/* Content */}
      <div className="absolute top-1/3 left-1/4 transform -translate-x-1/4 -translate-y-1/3 z-10">
        <h1 className="text-white text-5xl font-['Bitcount']">Negocio</h1>
        <p className="text-white text-xl mt-4 font-['Lato']">Coming Soon</p>
      </div>

      {/* Mascot image on right side */}
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 z-20">
        <img src="/mascot.png" alt="Negosh Mascot" className="w-64 h-auto" />
      </div>

      {/* Grain overlay - now on top of everything */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        <div className="w-full h-full grain-overlay"></div>
      </div>

      {/* Font import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bitcount:wght@100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Oswald:wght@200..700&display=swap"
        rel="stylesheet"
      />

      {/* Grain overlay CSS */}
      <style jsx>{`
        .grain-overlay {
          background-image: url("https://s.studiobinder.com/wp-content/uploads/2020/08/What-is-Film-Grain-Film-Grain-Example.jpg?resolution=2560,1");
          background-repeat: repeat;
          background-size: 800px 800px;
          opacity: 0.1;
          mix-blend-mode: overlay;
        }
      `}</style>
    </div>
  );
}
