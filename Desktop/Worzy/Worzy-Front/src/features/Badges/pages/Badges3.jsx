"use client"

import { useState } from "react"

const Ranking = () => {
  const [badges, setBadges] = useState([
    {
      id: 1,
      name: "Insignia experto",
      points: 5000,
      description: "El máximo...",
      icon: "/public/experto.png",
      color: "rgba(255, 215, 0, 0.1)",
    },
    {
      id: 2,
      name: "Insignia intermedia",
      points: 3000,
      description: "Conseguiste...",
      icon: "/public/intermedia.png",
      color: "rgba(192, 192, 192, 0.1)",
    },
    {
      id: 3,
      name: "Insignia principiante",
      points: 1000,
      description: "Se obtiene...",
      icon: "/public/principiante.png",
      color: "rgba(205, 127, 50, 0.1)",
    },
  ])

  const handleInputChange = (id, field, value) => {
    setBadges(badges.map((badge) => (badge.id === id ? { ...badge, [field]: value } : badge)))
  }

  const handleDelete = (id) => {
    // In a real app, you would confirm before deleting
    setBadges(badges.filter((badge) => badge.id !== id))
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#1f384c] mb-8">EDITAR INSIGNIAS</h1>

      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
        {badges.map((badge, index) => (
          <div 
            key={badge.id} 
            className="grid grid-cols-1 sm:grid-cols-12 gap-4 mb-6 last:mb-0 p-4 border border-gray-100 rounded-lg"
          >
            {/* Badge Icon */}
            <div className="sm:col-span-1 flex justify-center sm:justify-start">
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src={badge.icon || "/placeholder.svg"} 
                  alt={badge.name} 
                  className="w-14 h-14 object-contain"
                />
              </div>
            </div>

            {/* Badge Name */}
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-[#1f384c] mb-1">
                Nombre de la insignia:
              </label>
              <input
                type="text"
                value={badge.name}
                onChange={(e) => handleInputChange(badge.id, "name", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Points */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-[#1f384c] mb-1">
                Puntos:
              </label>
              <input
                type="number"
                value={badge.points}
                onChange={(e) => handleInputChange(badge.id, "points", Number.parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Description */}
            <div className="sm:col-span-5">
              <label className="block text-sm font-medium text-[#1f384c] mb-1">
                Descripción
              </label>
              <textarea
                value={badge.description}
                onChange={(e) => handleInputChange(badge.id, "description", e.target.value)}
                className="w-full h-20 px-3 py-2 border border-gray-300 rounded-md text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Delete Button */}
            <div className="sm:col-span-1 flex items-center justify-center sm:justify-end">
              <button
                onClick={() => handleDelete(badge.id)}
                className="px-3 py-2 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition-colors w-full sm:w-auto"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <button className="px-6 py-2.5 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors">
          Cancelar
        </button>
        <button className="px-6 py-2.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
          Guardar Cambios
        </button>
      </div>
    </div>
  )
}

export default Ranking

