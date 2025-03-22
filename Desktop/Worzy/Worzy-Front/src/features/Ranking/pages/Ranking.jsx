"use client"

import { useState } from "react"
import { ChevronDown, Globe, FileText, Calendar } from "lucide-react"

const Ranking = () => {
  // Estado para el año y mes seleccionados
  const [selectedYear, setSelectedYear] = useState(2024)
  const [selectedMonth, setSelectedMonth] = useState("Mayo")
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false)

  // Lista de meses
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]

  // Datos de ejemplo para las tablas de ranking
  const rankingData = [
    { top: 1, nombre: "Rafael Pereira", puntos: 967 },
    { top: 2, nombre: "Brayan Restrepo", puntos: 724 },
    { top: 3, nombre: "Zurangely Portillo", puntos: 601 },
    { top: 4, nombre: "Dickson Mosquera", puntos: 510 },
    { top: 5, nombre: "Diego Alejandro", puntos: 508 },
  ]

  // Función para seleccionar un año
  const handleYearSelect = (year) => {
    setSelectedYear(year)
  }

  // Función para seleccionar un mes
  const handleMonthSelect = (month) => {
    setSelectedMonth(month)
    setIsMonthDropdownOpen(false)
  }

  // Función para alternar el menú desplegable de meses
  const toggleMonthDropdown = () => {
    setIsMonthDropdownOpen(!isMonthDropdownOpen)
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header con título y filtros */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1f384c]">Ranking</h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
            <div className="flex items-center w-full sm:w-auto">
              <span className="mr-3 text-sm font-medium text-[#1f384c] whitespace-nowrap">Año</span>
              <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                {[2023, 2024, 2025].map((year) => (
                  <button
                    key={year}
                    className={`px-4 py-1.5 flex-1 sm:flex-none ${
                      selectedYear === year ? "bg-[#1f384c] text-white" : "bg-white text-[#1f384c]"
                    } hover:bg-[#f0f0f0] hover:text-[#1f384c] rounded border border-[#d6dade] transition-colors`}
                    onClick={() => handleYearSelect(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center w-full sm:w-auto">
              <span className="mr-3 text-sm font-medium text-[#1f384c]">Mes</span>
              <div className="relative flex-1 sm:flex-none">
                <button
                  className="w-full sm:w-[160px] px-4 py-1.5 bg-white hover:bg-[#f0f0f0] text-[#1f384c] rounded border border-[#d6dade] flex items-center justify-between"
                  onClick={toggleMonthDropdown}
                >
                  <span>{selectedMonth}</span>
                  <ChevronDown className="h-4 w-4 ml-2" />
                </button>

                {isMonthDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 sm:right-auto sm:w-[160px] mt-1 bg-white border border-[#d6dade] rounded-md shadow-lg z-20">
                    <ul className="py-1 max-h-60 overflow-auto">
                      {months.map((month) => (
                        <li
                          key={month}
                          className={`px-4 py-2 cursor-pointer hover:bg-[#f0f0f0] ${
                            selectedMonth === month ? "bg-[#f1f2f7] font-medium" : ""
                          }`}
                          onClick={() => handleMonthSelect(month)}
                        >
                          {month}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tarjetas de métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Tarjeta Aprendices */}
          <div className="p-6 flex items-center justify-between bg-white rounded-lg shadow-sm border-l-4 border-l-blue-500">
            <div className="flex items-center">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                <Globe className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#1f384c]">Aprendices</p>
                <h2 className="text-3xl font-bold text-blue-500">2000</h2>
              </div>
            </div>
          </div>

          {/* Tarjeta Ficha */}
          <div className="p-6 flex items-center justify-between bg-white rounded-lg shadow-sm border-l-4 border-l-purple-500">
            <div className="flex items-center">
              <div className="bg-purple-50 p-3 rounded-full mr-4">
                <FileText className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#1f384c]">Ficha</p>
                <h2 className="text-3xl font-bold text-purple-500">120</h2>
              </div>
            </div>
          </div>

          {/* Tarjeta Programa */}
          <div className="p-6 flex items-center justify-between bg-white rounded-lg shadow-sm border-l-4 border-l-green-500">
            <div className="flex items-center">
              <div className="bg-green-50 p-3 rounded-full mr-4">
                <Calendar className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#1f384c]">Programa</p>
                <h2 className="text-3xl font-bold text-green-500">120</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de tablas */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {[
              { 
                title: "Aprendices", 
                data: rankingData,
                color: "blue",
                icon: <Globe className="h-5 w-5" />
              },
              { 
                title: "Ficha", 
                data: rankingData,
                color: "purple",
                icon: <FileText className="h-5 w-5" />
              },
              { 
                title: "Programa", 
                data: rankingData,
                color: "green",
                icon: <Calendar className="h-5 w-5" />
              },
            ].map((section) => (
              <div key={section.title} className={`bg-white rounded-lg border-t-4 border-t-${section.color}-500 p-6`}>
                <div className="flex items-center gap-2 mb-6">
                  <div className={`bg-${section.color}-50 p-2 rounded-full text-${section.color}-500`}>
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-[#1f384c]">{section.title}</h2>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 pb-2 border-b border-[#d6dade]">
                    <div className="text-sm font-medium text-[#1f384c]">Top</div>
                    <div className="text-sm font-medium text-[#1f384c]">Nombre</div>
                    <div className="text-sm font-medium text-[#1f384c] text-right">Puntos</div>
                  </div>
                  {section.data.map((item) => (
                    <div key={item.top} className="grid grid-cols-3 py-2">
                      <div className={`text-${section.color}-500 font-bold`}>{item.top}</div>
                      <div className="text-[#1f384c] font-medium truncate">{item.nombre}</div>
                      <div className={`text-${section.color}-500 font-bold text-right`}>{item.puntos}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ranking

