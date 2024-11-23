// import React from 'react'

import Footer from "./Footer";
import Header from "./Header";
import img4 from "./image/img4.jpeg";
import img2 from "./image/img2.jpeg";
import img3 from "./image/img3.png";
export default function ServicePlambier() {
  return (
    <>
    <Header/>
    {/* Hero Section */}
    <section
      className="relative h-[434px] bg-cover bg-center"
      style={{ backgroundImage: `${img4}` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        {/* Hero Text */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center">
          <h1 className="text-white text-6xl font-bold mb-4">Nos services</h1>
          <p className="text-white text-3xl">
            Une large gamme de services professionnels à votre disposition
          </p>
        </div>
      </div>

      {/* Search Section - Positioned to overlap */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[95%] z-20">
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
                <option>Choisir votre ville</option>
                <option>Choisir votre ville</option>
              </select>
            </div>

            {/* Secteur */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-2 ml-6">
                Choisir votre quartier
              </label>
              <select className="w-full px-4 py-2.5 rounded-full border border-gray-300">
                <option>Choisir votre quartier</option>
                <option>Choisir votre quartier</option>
                <option>Choisir votre quartier</option>
              </select>
            </div>

            {/* Service */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-2 ml-6">
                Choisir votre service
              </label>
              <select className="w-full px-4 py-2.5 rounded-full border border-gray-300">
                <option>Choisir votre service</option>
                <option>Choisir votre service</option>
                <option>Choisir votre service</option>
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
                <a href="findprestataire.html">Rechercher</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Spacer for search box overlap */}
    <div className="h-32"></div>

    {/* Section Title and Description */}
    <div className="max-w-7xl mx-auto px-8 mb-">
      <p className="text-gray-600">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making
        it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going
        through the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
        1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and
        Evil) by Cicero, written in 45 BC.
      </p>
    </div>

    {/* Avantages Section */}
    <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-16">Avantages</h2>
          <div className="flex gap-8">
            <div className="w-[300px]">
              <img
                src={img2}
                alt="Plumber Service"
                className="rounded-lg w-full h-[200px] object-cover object-center"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <i className="fas fa-check text-[#4052B4]"></i>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check text-[#4052B4]"></i>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check text-[#4052B4]"></i>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check text-[#4052B4]"></i>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check text-[#4052B4]"></i>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check text-[#4052B4]"></i>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[80%] mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 items-start">
            {/* FAQ Content */}
            <div className="w-full">
              <h2 className="text-3xl font-bold text-[#4A69BD] mb-16">
                Questions fréquemment posées (FAQs)
              </h2>

              <div className="space-y-6">
                <div className="pb-6">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="font-bold text-gray-800 pr-4">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry?
                    </span>
                    <div className="bg-[#4052B4] rounded-full p-1 min-w-[28px] min-h-[28px] flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </button>
                  <div className="mt-2">
                    <p className="text-gray-600">
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by injected humour or
                      randomised words which don &rsquo;t look even slightly believable.
                    </p>
                  </div>
                </div>

                <div className="pb-4">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="font-bold text-gray-800 pr-4">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry?
                    </span>
                    <div className="bg-[#4052B4] rounded-full p-1 min-w-[28px] min-h-[28px] flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </button>
                  <div className="mt-2">
                    <p className="text-gray-600">
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by injected humour or
                      randomised words which don &rsquo;t look even slightly believable.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Image */}
            <div className="flex items-start justify-end">
              <img
                src={img2}
                alt="FAQ illustration"
                className="rounded-lg shadow-lg w-2/3 h-auto ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-100 py-32">
        <div className="max-w-[75%] mx-auto">
          <div className="relative flex items-center justify-center min-h-[200px]">
            {/* Previous Button */}
            <button className="absolute left-0 p-3 rounded-full bg-[#4052B4] text-white hover:bg-[#324092] transition-colors">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Testimonial Content */}
            <div className="text-center max-w-3xl px-4">
              <div>
                <img
                  src={img3}
                  alt="Anouar.A"
                  className="w-24 h-24 mx-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#4052B4] mb-2">
                Anouar.A
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed font-light italic">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old.
              </p>
            </div>

            {/* Next Button */}
            <button className="absolute right-0 p-3 rounded-full bg-[#4052B4] text-white hover:bg-[#324092] transition-colors">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer Spacer */}
      <Footer/>
    </>
  )
}
