// import React from 'react'
import Header from './Header';
import Footer from './Footer';
import img3 from './image/img3.png'
export default function Findprestataire() {
  return (
    <>
    <Header/>
   {/* Search Section */}
   <section className="bg-gray-100 py-8">
        <div className="max-w-[1400px] mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-center text-3xl font-bold text-[#4052B4] mb-8">
            Trouvez votre prestataire
          </h2>

          <div className="grid grid-cols-4 gap-8">
            {/* Ville */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-2 ml-6">
                Choisir votre ville
              </label>
              <select className="w-full px-4 py-2.5 rounded-full border border-gray-300">
                <option>Choisir votre ville</option>
                <option>Ville 1</option>
                <option>Ville 2</option>
              </select>
            </div>

            {/* Secteur */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-2 ml-6">
                Choisir votre quartier
              </label>
              <select className="w-full px-4 py-2.5 rounded-full border border-gray-300">
                <option>Choisir votre quartier</option>
                <option>Quartier 1</option>
                <option>Quartier 2</option>
              </select>
            </div>

            {/* Service */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-2 ml-6">
                Choisir votre service
              </label>
              <select className="w-full px-4 py-2.5 rounded-full border border-gray-300">
                <option>Choisir votre service</option>
                <option>Service 1</option>
                <option>Service 2</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button className="w-full bg-[#4052B4] text-white px-6 py-2.5 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <a href="/findprestataire">Rechercher</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="bg-gray-100 py-4 mb-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center justify-between h-[381px] w-[285px]"
              >
                <img
                  src={img3}
                  alt="Ahmed reda"
                  className="w-32 h-32 rounded-full mb-6"
                />
                <h3 className="font-medium text-xl mb-4">Ahmed reda</h3>
                <p className="text-gray-600 text-center text-base mb-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <button className="bg-[#4052B4] text-white px-8 py-2.5 rounded-full hover:bg-blue-700">
                  <a href="/vueprofil">Voir le profil</a>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
        <Footer/>
    </>
  )
}





