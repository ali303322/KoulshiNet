// import React from 'react'

import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import img2 from './image/img2.jpeg'
import img1 from './image/img1.jpeg'

export default function Home() {
    const [activeTab, setActiveTab] = useState(null);

    const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
    }
  return (
    <div>
        <Header/>
    {/* Hero Section */}
    <section
        className="relative h-[500px] bg-cover bg-center bg-gray-100"
        style={{ backgroundImage: `url(${img1})` }}
    >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
            {/* Hero Text */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center">
                <h1 className="text-white text-6xl font-bold mb-4">Bienvenue sur koulchinet</h1>
                <p className="text-white text-3xl">Simplifiez vous la vie: Tous vos services en un click</p>
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
                        <label htmlFor="ville" className="text-sm text-gray-600 mb-2 ml-6">
                            Choisir votre ville
                        </label>
                        <select
                            id="ville"
                            className="w-full px-4 py-2.5 rounded-full border border-gray-300"
                        >
                            <option>Choisir votre ville</option>
                            <option>Ville 1</option>
                            <option>Ville 2</option>
                        </select>
                    </div>

                    {/* Secteur */}
                    <div className="flex flex-col">
                        <label htmlFor="quartier" className="text-sm text-gray-600 mb-2 ml-6">
                            Choisir votre quartier
                        </label>
                        <select
                            id="quartier"
                            className="w-full px-4 py-2.5 rounded-full border border-gray-300"
                        >
                            <option>Choisir votre quartier</option>
                            <option>Quartier 1</option>
                            <option>Quartier 2</option>
                        </select>
                    </div>

                    {/* Service */}
                    <div className="flex flex-col">
                        <label htmlFor="service" className="text-sm text-gray-600 mb-2 ml-6">
                            Choisir votre service
                        </label>
                        <select
                            id="service"
                            className="w-full px-4 py-2.5 rounded-full border border-gray-300"
                        >
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
                                    strokeWidth={2}
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
    <div className="h-32 bg-gray-100"></div>

    {/* Section Title and Description - Left Aligned */}
    <section className="py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Bienvenue chez koulchinet</h2>
        <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore recusandae fugiat veritatis et nulla consectetur,
            atque deleniti. Incidunt consequuntur, earum distinctio possimus amet mollitia beatae repudiandae sint! Ea, exercitationem laborum?
        </p>
    </div>
    </section>

    {/* Categories Section */}
    <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Nos Catégories de Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {/* Services Domestiques */}
            <a href="https://example.com/services-domestiques" className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                <svg className="w-16 h-16 text-[#4299e1] mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,4h-4V2h-6v2H5C3.89,4,3,4.89,3,6v14c0,1.11,0.89,2,2,2h14c1.11,0,2-0.89,2-2V6C21,4.89,20.11,4,19,4z M19,20H5V6h14V20z" />
                </svg>
                <h3 className="text-2xl font-semibold text-[#2c5282] mb-2">Services Domestiques</h3>
                <p className="text-gray-600 mb-2">
                    Ménage, jardinage, électricité, plomberie, menuiserie, peinture, contrôle des nuisibles, réparation électroménager,
                    assemblage meubles, installation TV, miroiterie, déménagement, énergie solaire, tapisserie, serrurier, mécanique
                    auto...
                </p>
            </a>

            {/* Services d'Accompagnement */}
            <a href="https://example.com/services-accompagnement" className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                <svg className="w-16 h-16 text-[#4299e1] mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16,13c-1.65,0-3,1.35-3,3s1.35,3,3,3s3-1.35,3-3S17.65,13,16,13z M16,17c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1 S16.55,17,16,17z M12,20H4v-1.5C4,17,7,15.9,9,15.9S14,17,14,18.5V20z M9,12c1.65,0,3-1.35,3-3S10.65,6,9,6S6,7.35,6,9S7.35,12,9,12z" />
                </svg>
                <h3 className="text-2xl font-semibold text-[#2c5282] mb-2">Services d&rsquo;Accompagnement</h3>
                <p className="text-gray-600 mb-2">
                    Garde d&rsquo;enfants, garde d&rsquo;animaux, toilettage, aide aux personnes âgées, kinésithérapie, soins à domicile, cours à
                    domicile, cours de musique...
                </p>
            </a>

            {/* Bien-être & Soins */}
            <a href="https://example.com/services-bien-etre" className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                <svg className="w-16 h-16 text-[#4299e1] mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3 C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z" />
                </svg>
                <h3 className="text-2xl font-semibold text-[#2c5282] mb-2">Bien-être & Soins</h3>
                <p className="text-gray-600 mb-2">
                    Coaching sportif, coaching mental, diététique et nutrition, thérapie par massage, kinésithérapie, coiffeur à
                    domicile...
                </p>
            </a>
            {/* Rénovation */}
            <a href="https://example.com/services-renovation" className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                        <svg className="w-16 h-16 text-[#4299e1] mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                        </svg>
                        <h3 className="text-2xl font-semibold text-[#2c5282] mb-2">Rénovation</h3>
                        <p className="text-gray-600 mb-2">
                            Maçonnerie, rénovations cuisines et salles de bains, carrelage, parquet, installation fenêtres, plâtre,
                            climatisation, marbre, inox, étanchéité...
                        </p>
                    </a>

                    {/* Informatique */}
                    <a href="https://example.com/services-informatique" className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                        <svg className="w-16 h-16 text-[#4299e1] mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
                        </svg>
                        <h3 className="text-2xl font-semibold text-[#2c5282] mb-2">Informatique</h3>
                        <p className="text-gray-600 mb-2">
                            Assistance informatique, design des sites web, copywriting et SEO, e-Commerce...
                        </p>
                    </a>

                    {/* Événements */}
                    <a href="https://example.com/services-evenements" className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                        <svg className="w-16 h-16 text-[#4299e1] mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                        </svg>
                        <h3 className="text-2xl font-semibold text-[#2c5282] mb-2">Événements</h3>
                        <p className="text-gray-600 mb-2">
                            Hôtesses, serveurs, chef à domicile, traiteurs, orchestres, DJ, negafa et cérémonies de mariage,
                            photographes et cameraman...
                        </p>
                    </a>

                    {/* Services Professionnels */}
                    <a href="https://example.com/services-professionnels" className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                        <svg className="w-16 h-16 text-[#4299e1] mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
                        </svg>
                        <h3 className="text-2xl font-semibold text-[#2c5282] mb-2">Services Professionnels</h3>
                        <p className="text-gray-600 mb-2">
                            Traduction, interprétation, développement web et mobile, graphisme, rédaction de contenu, gestion des réseaux sociaux, conseils juridiques...
                        </p>
            </a>
        </div>
    </div>
    </section>

    {/* how it's work section */}
    <section className="py-16 bg-white -mt-4">
            <div className="max-w-[75%] mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Comment ça marche?</h2>
                <div className="space-y-4">
                    {/* Item 1 */}
                    <div className="flex items-start gap-3">
                        <div className="min-w-[20px] mt-1">
                            <svg className="w-5 h-5 text-[#4052B4]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                            </svg>
                        </div>
                        <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-start gap-3">
                        <div className="min-w-[20px] mt-1">
                            <svg className="w-5 h-5 text-[#4052B4]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                            </svg>
                        </div>
                        <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-start gap-3">
                        <div className="min-w-[20px] mt-1">
                            <svg className="w-5 h-5 text-[#4052B4]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                            </svg>
                        </div>
                        <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-start gap-3">
                        <div className="min-w-[20px] mt-1">
                            <svg className="w-5 h-5 text-[#4052B4]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                            </svg>
                        </div>
                        <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    {/* Item 5 */}
                    <div className="flex items-start gap-3">
                        <div className="min-w-[20px] mt-1">
                            <svg className="w-5 h-5 text-[#4052B4]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                            </svg>
                        </div>
                        <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    {/* Item 6 */}
                    <div className="flex items-start gap-3">
                        <div className="min-w-[20px] mt-1">
                            <svg className="w-5 h-5 text-[#4052B4]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                            </svg>
                        </div>
                        <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* mission section */}
        <section className="bg-[#4052B4] text-white py-16">
            <div className="max-w-[75%] mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6">Notre mission</h2>
                <div className="space-y-4">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or randomised words which don&rsquo;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&rsquo;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>

                    <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor sit amet...</p>
                </div>
            </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
            <div className="max-w-[80%] mx-auto px-4">
                <div className="grid grid-cols-2 gap-8 items-start">
                    {/* FAQ Content */}
                    <div className="w-full">
                        <h2 className="text-3xl font-bold text-[#4A69BD] mb-16">Questions fréquemment posées (FAQs)</h2>

                        {/* FAQ Items */}
                        <div className="space-y-6">
                            {/* FAQ Item 1 */}
                            <div className="pb-6">
                                <button
                                    onClick={() => toggleTab(1)}
                                    className="flex justify-between items-center w-full text-left"
                                >
                                    <span className="font-bold text-gray-800 pr-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry?</span>
                                    <div className="bg-[#4052B4] rounded-full p-1 min-w-[28px] min-h-[28px] flex items-center justify-center">
                                        {activeTab !== 1 ? (
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"/>
                                            </svg>
                                        )}
                                    </div>
                                </button>
                                {activeTab === 1 && (
                                    <div className="mt-2">
                                        <p className="text-gray-600">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or randomised words which don&rsquo;t look even slightly believable.</p>
                                    </div>
                                )}
                            </div>

                            {/* FAQ Item 2 */}
                            <div className="pb-4">
                                <button
                                    onClick={() => toggleTab(2)}
                                    className="flex justify-between items-center w-full text-left"
                                >
                                    <span className="font-bold text-gray-800 pr-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry?</span>
                                    <div className="bg-[#4052B4] rounded-full p-1 min-w-[28px] min-h-[28px] flex items-center justify-center">
                                        {activeTab !== 2 ? (
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"/>
                                            </svg>
                                        )}
                                    </div>
                                </button>
                                {activeTab === 2 && (
                                    <div className="mt-2">
                                        <p className="text-gray-600">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or randomised words which don&rsquo;t look even slightly believable.</p>
                                    </div>
                                )}
                            </div>

                            {/* FAQ Items 3-5 can follow the same structure as above with updated indices */}
                        </div>
                    </div>

                    {/* FAQ Image */}
                    <div className="flex items-start justify-end">
                        <img src={img2} alt="FAQ illustration" className="rounded-lg shadow-lg w-2/3 h-auto ml-auto"/>
                    </div>
                </div>
            </div>
        </section>


    <Footer/>
</div>
  )
}
