// import React from 'react'

// import { useEffect, useState } from "react";
import HeaderPres from "./HeaderPres";
import SideBarPres from "./SideBarPres";


export default function HistoriquePres() {

  return (
    <div className="bg-gray-100 font-sans">
    <HeaderPres/>

     {/* Main Content */}
     <div className="flex min-h-screen">
       <SideBarPres/>
      <div className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-[#4a69bd] text-xl font-medium mb-6">Historique</h2>
       {/* Search Bar */}
       <div className="flex justify-between mb-6">
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4a69bd] focus:border-[#4a69bd] outline-none"
          />
        </div>

        {/* Table */}
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left py-3 px-4 font-semibold text-gray-600">Nom</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-600">Date</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-600">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">Achraf Amrani</td>
              <td className="py-3 px-4">27/10/2024 AT 16:15</td>
              <td className="py-3 px-4">Chat</td>
              <td className="py-3 px-4">
                <button className="text-red-500 hover:text-red-700">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          <button className="px-4 py-2 bg-[#4a69bd] text-white rounded disabled:bg-gray-400" disabled>
            Précédent
          </button>
          <button className="px-4 py-2 bg-[#4a69bd] text-white rounded">1</button>
          <button className="px-4 py-2 bg-[#4a69bd] text-white rounded">2</button>
          <button className="px-4 py-2 bg-[#4a69bd] text-white rounded">3</button>
          <button className="px-4 py-2 bg-[#4a69bd] text-white rounded">Suivant</button>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}
