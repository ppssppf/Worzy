"use client"

import { useState } from "react"
import { Search, Upload, X, ChevronDown } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Badges = () => {
  // Hook de navegación de React Router
  const navigate = useNavigate()

  // Estado para controlar la vista (formulario o lista)
  const [view, setView] = useState("list") // "list" o "form"

  // Estado para los campos del formulario
  const [badgeName, setBadgeName] = useState("")
  const [points, setPoints] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState(null)
  const [filePreview, setFilePreview] = useState(null)
  const [fileSize, setFileSize] = useState(null)

  // Estado para almacenar las insignias creadas
  const [badges, setBadges] = useState([
    {
      id: 1,
      name: "Insignia Experto",
      points: 5000,
      description:
        "¡El máximo reconocimiento! Otorgado al reunir 5,000 puntos. ¡Felicidades por ser un experto indiscutible!",
      color: "#ff5a87",
      image: "/public/experto.png",
    },
    {
      id: 2,
      name: "Insignia Intermedio",
      points: 3000,
      description: "¡Excelente progreso! Has alcanzado 3,000 puntos. Representa un nivel avanzado de logros.",
      color: "#9747ff",
      image: "/public/intermedia.png",
    },
    {
      id: 3,
      name: "Insignia Principiante",
      points: 1000,
      description: "Se obtiene al alcanzar 1,000 puntos en tu progreso. ¡Es el primer paso para destacar!",
      color: "#ffcc33",
      image: "/public/principiante.png",
    },
  ])

  // Función para manejar el cambio de archivo
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)
      setFilePreview(URL.createObjectURL(selectedFile))
      setFileSize((selectedFile.size / (1024 * 1024)).toFixed(1))
    }
  }

  // Función para eliminar el archivo
  const removeFile = () => {
    setFile(null)
    setFilePreview(null)
    setFileSize(null)
  }

  // Función para generar un color aleatorio para la insignia
  const getRandomColor = () => {
    const colors = ["#ff5a87", "#9747ff", "#ffcc33", "#33cc99", "#3399ff"]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault()

    // Crear nueva insignia
    const newBadge = {
      id: Date.now(),
      name: badgeName,
      points: Number(points),
      description: description,
      color: getRandomColor(),
      image: filePreview || "/placeholder.svg?height=60&width=60",
    }

    // Añadir la nueva insignia al array
    setBadges([...badges, newBadge])

    // Resetear el formulario
    setBadgeName("")
    setPoints("")
    setDescription("")
    setFile(null)
    setFilePreview(null)
    setFileSize(null)

    // Cambiar a la vista de lista
    setView("list")
  }

  // Función para navegar a la página de edición de insignias
  const handleEditBadges = () => {
    navigate("/programacion/insigneas3")
  }

  // Renderizar la vista de lista de insignias
  const renderBadgesList = () => {
    return (
      <div className="min-h-screen">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1f384c]">INSIGNIAS</h1>
            <button
              onClick={handleEditBadges}
              className="bg-[#1f384c] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Editar insignias
            </button>
          </div>

          <div className="grid gap-6">
            {badges.map((badge) => (
              <div key={badge.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white rounded-lg p-6 shadow-sm">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={badge.image}
                    alt={badge.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="font-semibold text-[#1f384c] text-lg mb-2">{badge.name}</h3>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: badge.color }}>
                    <p className="text-white text-sm">{badge.description}</p>
                  </div>
                </div>
                <div className="text-3xl font-bold sm:ml-4" style={{ color: badge.color }}>
                  {badge.points.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    )
  }

  const renderBadgeForm = () => {
    return (
      <div className="min-h-screen bg-[#f6f6fb]">
        <header className="bg-white py-4 px-6 border-b border-[#d6dade]">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="relative w-full sm:w-[500px]">
              <input
                type="text"
                placeholder="Buscar"
                className="w-full py-2 px-4 bg-[#f6f6fb] rounded-md text-[#627b87] focus:outline-none"
              />
              <Search className="absolute right-3 top-2.5 text-[#98a0b4] w-5 h-5" />
            </div>
            <div className="flex items-center gap-2 text-[#1f384c] font-medium">
              <span>Administrador</span>
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1f384c] mb-8">CREAR INSIGNIAS</h1>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-6 sm:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form fields remain the same but with adjusted spacing */}
              {/* ... existing form fields ... */}

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setView("list")}
                  className="bg-[#ee4848] text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors font-medium w-full sm:w-1/2"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-[#0ead69] text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors font-medium w-full sm:w-1/2"
                >
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    )
  }

  // Renderizar la vista correspondiente
  return view === "list" ? renderBadgesList() : renderBadgeForm()
}

export default Badges

