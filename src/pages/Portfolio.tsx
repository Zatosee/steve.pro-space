
const Portfolio = () => {
  return (
    <div className="relative min-h-screen bg-gradient-radial from-[#f6e6b4] via-[#f8d7e8] to-[#a6d5fa] overflow-hidden font-montserrat">
      {/* Bandeau Header */}
      <header className="max-w-6xl mx-auto mt-5 flex justify-between items-center bg-white/30 backdrop-blur-md rounded-2xl px-8 py-4">
        <div className="text-2xl font-playfair text-gray-800">
          Steve
        </div>
        <nav className="flex gap-8">
          <a href="#" className="text-gray-800 hover:text-[#f6e6b4] transition">Accueil</a>
          <a href="#" className="text-gray-800 hover:text-[#f6e6b4] transition">À propos</a>
          <a href="#" className="text-gray-800 hover:text-[#f6e6b4] transition">Projets</a>
          <a href="#" className="text-gray-800 hover:text-[#f6e6b4] transition">Contact</a>
        </nav>
        <button className="bg-gradient-to-r from-[#f6e6b4] to-[#e3c55d] text-gray-800 font-semibold px-5 py-2 rounded-full hover:from-[#e3c55d] hover:to-[#e3c55d] hover:text-white transition">
          Télécharger mon CV
        </button>
      </header>

      {/* Section Hero */}
      <main className="relative z-10 text-center mt-24 px-4">
        <h1 className="text-5xl md:text-6xl font-playfair text-gray-800">
          Salut, moi c’est Steve.
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 mt-4">
          Développeur Front-End passionné
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mt-6 text-lg">
          Je crée des interfaces modernes et fluides, inspirées par la légèreté des nuages.
        </p>
        <button className="mt-10 bg-gradient-to-r from-[#f6e6b4] to-[#e3c55d] text-gray-800 font-semibold px-8 py-3 rounded-full hover:from-[#e3c55d] hover:to-[#e3c55d] hover:text-white transition">
          Découvrir mon travail
        </button>
      </main>

      {/* Halo lumineux derrière le texte */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#f6e6b466] to-transparent rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      {/* Plumes décoratives */}
      <div className="absolute top-[100px] left-[80px] w-28 h-10 bg-white opacity-30 rounded-full blur-3xl rotate-12"></div>
      <div className="absolute bottom-[150px] right-[120px] w-40 h-12 bg-white opacity-30 rounded-full blur-3xl rotate-12"></div>
      <div className="absolute top-[300px] right-[50px] w-24 h-8 bg-white opacity-30 rounded-full blur-3xl rotate-12"></div>
    </div>
  );
};

export default Portfolio;
